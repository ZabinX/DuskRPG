// --- DOM Elements ---
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const textInput = document.getElementById('text-input');
const connectButton = document.getElementById('btn-connect');
const logContainer = document.getElementById('log-container');
const infoHp = document.getElementById('info-hp');
const infoMp = document.getElementById('info-mp');
const infoLoc = document.getElementById('info-loc');

// --- Game Constants ---
const TILE_SIZE = 32;
const ORIGINAL_TILE_SIZE = 32;
const ORIGINAL_SPRITE_SIZE = 64;
const ORIGINAL_PLAYER_SIZE = 64;

// --- Game State ---
let ws;
let isConnected = false;
let clientState = 'LOADING'; // LOADING, READY
let dataBuffer = new ArrayBuffer(0);
const packetBuffer = []; // Buffer for packets during the LOADING state.
let images = {};
let shrMap = [];
let shrMapAlpha = [];
let entities = new Map();
let vctParticles = [];
let playerLocX = 0;
let playerLocY = 0;
let viewRangeX = 10; // Default, will be updated by server
let viewRangeY = 5;  // Default, will be updated by server
let cameraX = 0;
let cameraY = 0;
let targetCameraX = 0;
let targetCameraY = 0;
let player = null;
let playerTicks = 200;

// --- Helper Functions ---
function resizeCanvas() {
    const leftPanel = document.getElementById('left-panel');
    const panelWidth = leftPanel.clientWidth;
    const aspectRatio = (viewRangeX * 2 + 1) / (viewRangeY * 2 + 1);
    let newWidth = panelWidth;
    let newHeight = newWidth / aspectRatio;
    const bottomPanelHeight = document.getElementById('bottom-panel').clientHeight;
    const availableHeight = leftPanel.clientHeight - bottomPanelHeight - 20;
    if (newHeight > availableHeight) {
        newHeight = availableHeight;
        newWidth = newHeight * aspectRatio;
    }
    canvas.width = newWidth;
    canvas.height = newHeight;
}

function log(message, target = 'gossip') {
    console.log(message);
    const p = document.createElement('p');
    p.style.margin = '2px 0';
    p.innerHTML = `[<span style="color: #888;">${new Date().toLocaleTimeString()}</span>] ${message}`;
    if (logContainer) {
        logContainer.appendChild(p);
        logContainer.scrollTop = logContainer.scrollHeight;
    }
}

function loadImage(name, src) {
    return new Promise((resolve, reject) => {
        images[name] = new Image();
        images[name].onload = resolve;
        images[name].onerror = reject;
        images[name].src = src;
    });
}

async function preloadAssets() {
    log("Preloading assets...");
    const assetsToLoad = [
        { name: 'map', src: 'img/map.gif' },
        { name: 'players', src: 'img/players.gif' },
        { name: 'sprites', src: 'img/sprites.gif' },
        { name: 'armor', src: 'img/zmagiccarmor.png' },
        { name: 'harden', src: 'img/zmagicwharden.png' }
    ];
    for (const asset of assetsToLoad) {
        try {
            await loadImage(asset.name, asset.src);
        } catch (error) {
            log(`Failed to load asset: ${asset.name} from ${asset.src}.`);
        }
    }
    log("Asset loading complete.");
}

class Entity {
    constructor(name, id, image, type, locX, locY, step) {
        this.name = name; this.id = id; this.image = image; this.type = type;
        this.locX = locX; this.locY = locY; this.step = step;
        this.pixelX = locX * TILE_SIZE; this.pixelY = locY * TILE_SIZE;
        this.targetX = this.pixelX; this.targetY = this.pixelY;
        this.isMoving = false; this.queuedMoves = []; this.intMoveDirection = -1;
    }
}

class DataReader {
    constructor(arrayBuffer) {
        this.dataView = new DataView(arrayBuffer);
        this.uint8array = new Uint8Array(arrayBuffer);
        this.offset = 0;
    }
    hasMoreData(needed = 1) { return this.offset + needed <= this.dataView.byteLength; }
    readByte() {
        if (!this.hasMoreData(1)) throw new Error("Not enough data to read byte");
        const byte = this.dataView.getUint8(this.offset);
        this.offset += 1;
        return byte;
    }
    readLine() {
        const start = this.offset;
        const end = this.uint8array.indexOf(10, start); // 10 = '\n'
        if (end === -1) throw new Error("Not enough data for a full line");
        const lineBytes = this.uint8array.subarray(start, end);
        const line = new TextDecoder('iso-8859-1').decode(lineBytes);
        this.offset = end + 1;
        return line;
    }
}

function _appendBuffer(buffer1, buffer2) {
    const tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);
    tmp.set(new Uint8Array(buffer1), 0);
    tmp.set(new Uint8Array(buffer2), buffer1.byteLength);
    return tmp.buffer;
}

function connect() {
    log(`Attempting to connect...`);
    ws = new WebSocket('ws://localhost:7475');
    ws.binaryType = 'arraybuffer';
    ws.onopen = () => {
        isConnected = true;
        log("Connection opened. Please enter your character name.");
        textInput.placeholder = "Enter your character name and press Enter";
    };
    ws.onmessage = (event) => {
        dataBuffer = _appendBuffer(dataBuffer, event.data);
        processBuffer();
    };
    ws.onerror = (error) => log("WebSocket Error: " + error);
    ws.onclose = () => { isConnected = false; log("Connection closed."); };
}

function sendString(str) {
    if (isConnected) {
        const encoder = new TextEncoder();
        const data = encoder.encode(`${str}\n`);
        ws.send(data);
    }
}

function startMove(ent, direction) {
    if (direction === 0) { ent.targetY -= TILE_SIZE; } // North
    else if (direction === 1) { ent.targetY += TILE_SIZE; } // South
    else if (direction === 2) { ent.targetX -= TILE_SIZE; } // West
    else if (direction === 3) { ent.targetX += TILE_SIZE; } // East
    ent.isMoving = true; ent.intMoveDirection = direction;
}

function processBuffer() {
    while (dataBuffer.byteLength > 0) {
        const reader = new DataReader(dataBuffer);
        try {
            const { opcode, lines, bytesRead } = parseSinglePacket(reader);
            if (clientState === 'LOADING') {
                packetBuffer.push({ opcode, lines });
                const hasDim = packetBuffer.some(p => p.opcode === 19);
                const hasEnd = packetBuffer.some(p => p.opcode === 14);
                if (hasDim && hasEnd) {
                    log("Map dimensions and end-of-stream received. Processing buffered packets...");
                    clientState = 'READY';
                    processBufferedPackets();
                }
            } else {
                _processPacket(opcode, lines);
            }
            dataBuffer = dataBuffer.slice(bytesRead);
        } catch (e) {
            if (e.message.startsWith("Not enough data")) {
                break;
            }
            log(`Error in processBuffer, discarding one byte to prevent loop: ${e}`);
            console.error(e);
            dataBuffer = dataBuffer.slice(1);
        }
    }
}

function processBufferedPackets() {
    const dimPacketIndex = packetBuffer.findIndex(p => p.opcode === 19);
    if (dimPacketIndex !== -1) {
        const [dimPacket] = packetBuffer.splice(dimPacketIndex, 1);
        _processPacket(dimPacket.opcode, dimPacket.lines);
    } else {
        log("CRITICAL: Map dimensions (opcode 19) not found in initial data stream.");
    }
    for (const packet of packetBuffer) {
        if (packet.opcode !== 14) {
            _processPacket(packet.opcode, packet.lines);
        }
    }
    packetBuffer.length = 0;
}

function parseSinglePacket(reader) {
    const opcode = reader.readByte();
    const lines = [];
    const lineReader = () => {
        const line = reader.readLine();
        lines.push(line);
        return line;
    };

    switch (opcode) {
        case 0: case 9: case 12: case 13: case 14: case 30: case 61: break;
        case 1: case 3: case 15: case 16: case 21: case 28: case 31: case 32: case 33: case 37: case 38: case 39: case 40: case 41: case 42: case 60: lineReader(); break;
        case 19: case 29: case 34: lineReader(); lineReader(); break;
        case 36: lineReader(); lineReader(); lineReader(); break;
        case 5: for(let i=0; i<4; i++) lineReader(); break;
        case 23: for(let i=0; i<4; i++) lineReader(); break;
        case 7: for(let i=0; i<9; i++) lineReader(); break;
        case 24: case 25: case 26: case 27: lineReader(); break;
        case 6: case 8: case 10: case 11: case 17: case 22: while (lineReader() !== "."); break;
        case 18: case 20: lineReader(); while(lineReader() !== "--EOF--"); break;
        case 35: while(lineReader() !== "-1"); break;
        case 2: {
            lineReader(); lineReader();
            const mapWidth = viewRangeX * 2 + 1;
            const mapHeight = viewRangeY * 2 + 1;
            for (let i = 0; i < mapWidth * mapHeight * 2; i++) lineReader();
            break;
        }
        case 4: {
            lineReader();
            const type = parseInt(lineReader(), 10);
            for(let i=0; i<4; i++) lineReader();
            if (type === 0) lineReader();
            break;
        }
        default: throw new Error(`Unknown opcode: ${opcode}`);
    }
    return { opcode, lines, bytesRead: reader.offset };
}

function _processPacket(opcode, lines) {
    let lineIndex = 0;
    const readLine = () => lines[lineIndex++];

    switch (opcode) {
        case 0: log("Server sent disconnect signal."); ws.close(); return;
        case 1: log(`RC Address: ${readLine()}`); break;
        case 2: {
            playerLocX = parseInt(readLine(), 10);
            playerLocY = parseInt(readLine(), 10);
            infoLoc.textContent = `Loc: ${playerLocX}/${playerLocY}`;
            const mapWidth = viewRangeX * 2 + 1;
            const mapHeight = viewRangeY * 2 + 1;
            shrMap = Array.from({ length: mapWidth }, () => new Array(mapHeight).fill(0));
            for (let i = 0; i < mapWidth; i++) {
                for (let j = 0; j < mapHeight; j++) {
                    shrMap[i][j] = parseInt(readLine(), 10);
                }
            }
            shrMapAlpha = Array.from({ length: mapWidth }, () => new Array(mapHeight).fill(0));
            for (let i = 0; i < mapWidth; i++) {
                for (let j = 0; j < mapHeight; j++) {
                    shrMapAlpha[i][j] = parseInt(readLine(), 10);
                }
            }
            log(`Received and parsed map data. Player at ${playerLocX}, ${playerLocY}`);
            break;
        }
        case 3: log(readLine()); break;
        case 4: {
            const name = readLine();
            const type = parseInt(readLine(), 10);
            const id = BigInt(readLine());
            const locX = parseInt(readLine(), 10);
            const locY = parseInt(readLine(), 10);
            const image = parseInt(readLine(), 10);
            const step = (type === 0) ? parseInt(readLine(), 10) : -1;
            const entity = new Entity(name, id, image, type, locX, locY, step);
            entities.set(id, entity);
            if (type === 0 && name === textInput.placeholder) {
                 player = entity;
            }
            break;
        }
        case 5: {
            const hp = parseInt(readLine(), 10);
            const maxhp = parseInt(readLine(), 10);
            const sp = parseInt(readLine(), 10);
            const maxsp = parseInt(readLine(), 10);
            infoHp.textContent = `HP: ${hp}/${maxhp}`;
            infoMp.textContent = `MP: ${sp}/${maxsp}`;
            break;
        }
        case 13: sendString("notdead"); break;
        case 16: entities.delete(BigInt(readLine())); break;
        case 19: { 
            const mapSizeX = parseInt(readLine(), 10);
            const mapSizeY = parseInt(readLine(), 10);
            viewRangeX = (mapSizeX - 1) / 2;
            viewRangeY = (mapSizeY - 1) / 2;
            log(`Received map dimensions: ${mapSizeX}x${mapSizeY}, view range: ${viewRangeX},${viewRangeY}`);
            resizeCanvas();
            sendString("applicationimages");
            break;
        }
        case 21: log(`EXP: ${readLine()}`); break;
        case 23: log(`<span style="color: rgb(${readLine()},${readLine()},${readLine()});">${readLine()}</span>`); break;
        case 24: case 25: case 26: case 27: {
            const id = BigInt(readLine());
            const ent = entities.get(id);
            if (ent) ent.isMoving ? ent.queuedMoves.push(opcode - 24) : startMove(ent, opcode - 24);
            break;
        }
        case 29: {
            const id = BigInt(readLine());
            const flag = parseInt(readLine(), 10);
            log(`Entity ${id} flag set to ${flag}`);
            break;
        }
        case 31: case 32: case 33: log(readLine()); break;
        case 34: {
            const id = BigInt(readLine());
            const hpData = readLine();
            log(`Opponent ${id} HP: ${hpData}`);
            break;
        }
        case 36: {
            const attackerId = BigInt(readLine());
            const defenderId = BigInt(readLine());
            const damage = parseInt(readLine(), 10);
            const attacker = entities.get(attackerId);
            const defender = entities.get(defenderId);
            if (defender) spawnBloodParticles(attacker, defender, damage);
            break;
        }
        case 37: playerTicks = Number(readLine()); break;
        case 38: spawnArmorParticles(entities.get(BigInt(readLine()))); break;
        case 39: spawnRegenerateParticles(entities.get(BigInt(readLine()))); break;
        case 40: spawnDetectInvisParticles(entities.get(BigInt(readLine()))); break;
        case 41: spawnHardenParticles(entities.get(BigInt(readLine()))); break;
        case 42: spawnShockParticles(entities.get(BigInt(readLine()))); break;
    }
}

class Particle {
    constructor(cfg) {
        this.x = cfg.x; this.y = cfg.y; this.vx = cfg.vx || 0; this.vy = cfg.vy || 0;
        this.lifetime = cfg.lifetime; this.maxLifetime = cfg.lifetime; this.color = cfg.color;
        this.size = cfg.size || 1; this.alpha = 1.0; this.gravity = cfg.gravity ?? 0.1;
        this.type = cfg.type || 'rect'; this.image = cfg.image; this.pulse = cfg.pulse || false;
        this.fade = cfg.fade ?? true; this.rotation = cfg.rotation || 0;
    }
    update() {
        this.x += this.vx; this.y += this.vy; this.vy += this.gravity; this.lifetime--;
        if (this.fade) this.alpha = Math.max(0, this.lifetime / this.maxLifetime);
        if (this.pulse) this.alpha = 0.5 + 0.5 * Math.sin((this.maxLifetime - this.lifetime) * 0.3);
    }
    isDead() { return this.lifetime <= 0; }
}

function spawnBloodParticles(attacker, defender, damage) {
    const numParticles = Math.min(50, Math.floor(damage / 2));
    const angle = attacker ? Math.atan2(defender.pixelY - attacker.pixelY, defender.pixelX - attacker.pixelX) : (Math.random() * Math.PI * 2);
    for (let i = 0; i < numParticles; i++) {
        const speed = 1.0 + Math.random() * 1.5, splatterAngle = angle + (Math.random() - 0.5) * 1.0;
        vctParticles.push(new Particle({ x: defender.pixelX + TILE_SIZE / 2, y: defender.pixelY, vx: Math.cos(splatterAngle) * speed, vy: Math.sin(splatterAngle) * speed, lifetime: 25 + Math.floor(Math.random() * 15), color: `rgba(180, 0, 0, 1)`, size: 2 + Math.floor(Math.random() * 2) }));
    }
}
function spawnArmorParticles(target) { if (!target || !images.armor) return; for (let i = 0; i < 4; i++) vctParticles.push(new Particle({ x: target.pixelX + TILE_SIZE / 2, y: target.pixelY, lifetime: 60, size: 40, type: 'image', image: images.armor, gravity: 0, fade: false, rotation: i * 90 })); }
function spawnHardenParticles(target) { if (!target || !images.harden) return; for (let i = 0; i < 8; i++) vctParticles.push(new Particle({ x: target.pixelX + TILE_SIZE / 2 + Math.cos(i * 45 * Math.PI/180) * 30, y: target.pixelY + Math.sin(i * 45 * Math.PI/180) * 30, lifetime: 120, color: '#a52a2a', size: 5, gravity: 0, type: 'image', image: images.harden })); }
function spawnShockParticles(target) { if (!target) return; for (let i=0; i<20; i++) vctParticles.push(new Particle({ x: target.pixelX + TILE_SIZE / 2, y: target.pixelY - i*20, lifetime: 20, color: 'yellow', size: 2, gravity: 0})); }
function spawnRegenerateParticles(target) { if (!target) return; vctParticles.push(new Particle({ x: target.pixelX + TILE_SIZE / 2, y: target.pixelY, lifetime: 200, color: 'green', size: 10, pulse: true, gravity: -0.02 })); }
function spawnDetectInvisParticles(target) { if (!target) return; vctParticles.push(new Particle({ x: target.pixelX + TILE_SIZE / 2, y: target.pixelY - 30, lifetime: 100, color: 'purple', size: 15, pulse: true, gravity: 0 })); }

function updateAndDrawParticles() {
    for (let i = vctParticles.length - 1; i >= 0; i--) {
        const p = vctParticles[i]; p.update();
        if (p.isDead()) { vctParticles.splice(i, 1); continue; }
        const screenX = p.x - cameraX, screenY = p.y - cameraY;
        ctx.globalAlpha = p.alpha;
        if (p.type === 'image' && p.image) {
            ctx.save(); ctx.translate(screenX, screenY); ctx.rotate(p.rotation * Math.PI / 180);
            ctx.drawImage(p.image, -p.size/2, -p.size/2, p.size, p.size); ctx.restore();
        } else {
            ctx.fillStyle = p.color; ctx.fillRect(screenX - p.size / 2, screenY - p.size / 2, p.size, p.size);
        }
    }
    ctx.globalAlpha = 1.0;
}

function drawMap() {
    if (!images.map || shrMap.length === 0) return;
    const mapWidth = viewRangeX * 2 + 1;
    const tileRenderSize = canvas.width / mapWidth;
    for (let i = 0; i < mapWidth; i++) {
        for (let j = 0; j < (viewRangeY * 2 + 1); j++) {
            if (!shrMap[i] || shrMap[i][j] === undefined) continue;
            const tileID = shrMap[i][j];
            if (tileID === 0) continue;
            const screenX = i * tileRenderSize;
            const screenY = j * tileRenderSize;
            ctx.drawImage(images.map, (tileID-1) * ORIGINAL_TILE_SIZE, 0, ORIGINAL_TILE_SIZE, ORIGINAL_TILE_SIZE, screenX, screenY, tileRenderSize, tileRenderSize);
        }
    }
}

function drawEntities() {
    if (!images.players || !images.sprites) return;
    const mapWidth = viewRangeX * 2 + 1;
    const tileRenderSize = canvas.width / mapWidth;
    const sortedEntities = [...entities.values()].sort((a, b) => a.pixelY - b.pixelY);

    for (const entity of sortedEntities) {
        const relativeX = entity.locX - (playerLocX - viewRangeX);
        const relativeY = entity.locY - (playerLocY - viewRangeY);
        const screenX = relativeX * tileRenderSize;
        const screenY = relativeY * tileRenderSize;
        const spriteRenderSize = tileRenderSize * 2;
        const drawX = screenX;
        const drawY = screenY - tileRenderSize;

        if (entity.step !== -1) {
            ctx.drawImage(images.players, (entity.image * 8 + entity.step) * ORIGINAL_PLAYER_SIZE, 0, ORIGINAL_PLAYER_SIZE, ORIGINAL_PLAYER_SIZE, drawX, drawY, spriteRenderSize, spriteRenderSize);
        } else {
            ctx.drawImage(images.sprites, entity.image * ORIGINAL_SPRITE_SIZE, 0, ORIGINAL_SPRITE_SIZE, ORIGINAL_SPRITE_SIZE, drawX, drawY, spriteRenderSize, spriteRenderSize);
        }
        ctx.fillStyle = "white";
        ctx.font = "12px 'Verdana'";
        ctx.fillText(entity.name, screenX + tileRenderSize/2 - ctx.measureText(entity.name).width / 2, screenY + tileRenderSize + 5);
    }
}

function gameLoop() {
    requestAnimationFrame(gameLoop);
    const entityMoveSpeed = TILE_SIZE / (playerTicks / 40.0);
    for (const ent of entities.values()) {
        if (ent.isMoving) {
            const dx = ent.targetX - ent.pixelX, dy = ent.targetY - ent.pixelY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < entityMoveSpeed) {
                ent.pixelX = ent.targetX; ent.pixelY = ent.targetY; ent.isMoving = false;
                ent.locX = Math.round(ent.pixelX / TILE_SIZE); ent.locY = Math.round(ent.pixelY / TILE_SIZE);
                if (ent.queuedMoves.length > 0) startMove(ent, ent.queuedMoves.shift());
            } else {
                const angle = Math.atan2(dy, dx);
                ent.pixelX += entityMoveSpeed * Math.cos(angle); ent.pixelY += entityMoveSpeed * Math.sin(angle);
            }
        }
    }
    
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    if (isConnected && clientState === 'READY') {
        drawMap();
        drawEntities();
        updateAndDrawParticles();
    }
}

async function init() {
    log("Client initializing...");
    await preloadAssets();
    connectButton.addEventListener('click', connect);
    textInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const text = textInput.value;
            if (textInput.placeholder.includes("character name")) {
                textInput.placeholder = text;
            }
            sendString(text);
            textInput.value = '';
            textInput.placeholder = 'Enter command...';
        }
    });

    canvas.addEventListener('mousedown', (e) => {
        if (!isConnected || clientState !== 'READY' || !player) return;
        const rect = canvas.getBoundingClientRect();
        const tileRenderSize = canvas.width / (viewRangeX * 2 + 1);
        const clickedGridX = Math.floor((e.clientX - rect.left) / tileRenderSize);
        const clickedGridY = Math.floor((e.clientY - rect.top) / tileRenderSize);
        const destX = (playerLocX - viewRangeX) + clickedGridX;
        const destY = (playerLocY - viewRangeY) + clickedGridY;

        let targetEntity = null;
        for (const entity of entities.values()) {
            if (entity.locX === destX && entity.locY === destY && entity !== player) {
                targetEntity = entity;
                break;
            }
        }

        if (e.button === 2) { // Right-click
            e.preventDefault();
            if (targetEntity) {
                sendString(`attack ${targetEntity.name} #${targetEntity.id}`);
                return;
            }
        }
        sendString(`findpath ${destX} ${destY}`);
    });
    canvas.addEventListener('contextmenu', e => e.preventDefault());

    window.addEventListener('keydown', (e) => {
        if (!isConnected || clientState !== 'READY' || document.activeElement === textInput) return;
        const command = {
            'ArrowUp': 'n', 'ArrowDown': 's', 'ArrowLeft': 'w', 'ArrowRight': 'e'
        }[e.key];
        if (command) {
            e.preventDefault();
            sendString(command);
        }
    });

    window.addEventListener('resize', resizeCanvas);
    log("Client initialized. Press 'Connect' to begin.");
    resizeCanvas();
    requestAnimationFrame(gameLoop);
}
init();