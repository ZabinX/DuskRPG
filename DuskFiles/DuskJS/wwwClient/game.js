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
const MAP_VIEW_WIDTH = 21;
const MAP_VIEW_HEIGHT = 11;

// --- Game State ---
let ws;
let isConnected = false;
let images = {};
let shrMap = [];
let shrMapAlpha = [];
let entities = new Map();
let vctParticles = [];
let playerLocX = 0;
let playerLocY = 0;
let viewRangeX = 10;
let viewRangeY = 5;
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
    const aspectRatio = MAP_VIEW_WIDTH / MAP_VIEW_HEIGHT;
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
        // Temporarily removed map_alpha.png as it was failing
    ];

    for (const asset of assetsToLoad) {
        try {
            log(`Loading asset: ${asset.name} (${asset.src})...`);
            await loadImage(asset.name, asset.src);
            log(`...${asset.name} loaded successfully.`);
        } catch (error) {
            log(`...Failed to load asset: ${asset.name} from ${asset.src}. Error: ${error}`);
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

class DataStream {
    constructor(arrayBuffer) { this.dataView = new DataView(arrayBuffer); this.offset = 0; }
    hasMoreData() { return this.offset < this.dataView.byteLength; }
    readByte() { this.offset += 1; return this.dataView.getInt8(this.offset - 1); }
    readShort() { this.offset += 2; return this.dataView.getInt16(this.offset - 2, false); }
    readLong() { this.offset += 8; return this.dataView.getBigInt64(this.offset - 8, false); }
    readUTF() {
        const length = this.dataView.getUint16(this.offset, false);
        this.offset += 2;
        const stringBytes = new Uint8Array(this.dataView.buffer, this.offset, length);
        this.offset += length;
        return new TextDecoder('utf-8').decode(stringBytes);
    }
}

function connect() {
    log(`Attempting to connect...`);
    ws = new WebSocket('ws://localhost:7475');
    ws.binaryType = 'arraybuffer';
    ws.onopen = () => { isConnected = true; log("Connection opened. Please enter your character name."); textInput.placeholder = "Enter your character name and press Enter"; };
    ws.onmessage = (event) => handleServerMessage(new DataStream(event.data));
    ws.onerror = (error) => log("WebSocket Error: " + error);
    ws.onclose = () => { isConnected = false; log("Connection closed."); };
}

function sendString(str) {
    if (isConnected) {
        // Encode the string into a UTF-8 byte array and send it as a binary frame.
        // This is crucial for the Java server to process it correctly via its InputStream.
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

function handleServerMessage(stream) {
    while (stream.hasMoreData()) {
        const opcode = stream.readByte();
        switch (opcode) {
            case 0: log("Server sent disconnect signal."); ws.close(); return;
            case 2:
                playerLocX = stream.readShort(); playerLocY = stream.readShort();
                infoLoc.textContent = `Loc: ${playerLocX}/${playerLocY}`;
                shrMap = Array.from({ length: MAP_VIEW_WIDTH }, () => new Array(MAP_VIEW_HEIGHT).fill(0));
                for (let i = 0; i < MAP_VIEW_WIDTH; i++) for (let j = 0; j < MAP_VIEW_HEIGHT; j++) shrMap[i][j] = stream.readShort();
                shrMapAlpha = Array.from({ length: MAP_VIEW_WIDTH }, () => new Array(MAP_VIEW_HEIGHT).fill(0));
                for (let i = 0; i < MAP_VIEW_WIDTH; i++) for (let j = 0; j < MAP_VIEW_HEIGHT; j++) shrMapAlpha[i][j] = stream.readShort();
                log(`Received map data. Player at ${playerLocX}, ${playerLocY}`);
                break;
            case 3: log(stream.readUTF()); break;
            case 4: {
                const name = stream.readUTF(), type = stream.readByte(), id = stream.readLong(), image = stream.readShort(), locX = stream.readShort(), locY = stream.readShort(), step = (type === 0) ? stream.readShort() : -1;
                const entity = new Entity(name, id, image, type, locX, locY, step);
                entities.set(id, entity);
                if (type === 0 && locX === playerLocX && locY === playerLocY) player = entity;
                break;
            }
            case 5: {
                const hp = stream.readShort(), maxhp = stream.readShort(), sp = stream.readShort(), maxsp = stream.readShort();
                infoHp.textContent = `HP: ${hp}/${maxhp}`; infoMp.textContent = `MP: ${sp}/${maxsp}`;
                break;
            }
            case 6: while (stream.hasMoreData()) { const itemType = stream.readShort(); if (itemType === -1) break; stream.readUTF(); } break;
            case 7: for(let i=0; i<9; i++) stream.readUTF(); break;
            case 8: stream.readUTF(); break;
            case 10: while(stream.hasMoreData()) if (stream.readUTF() === ".") break; break;
            case 13: sendString("notdead"); break;
            case 14: log("Server signaled end of initial data."); break;
            case 16: entities.delete(stream.readLong()); break;
            case 19: { const mapSizeX = stream.readShort(), mapSizeY = stream.readShort(); viewRangeX = (mapSizeX - 1) / 2; viewRangeY = (mapSizeY - 1) / 2; sendString("applicationimages"); break; }
            case 23: log(`<span style="color: rgb(${stream.readShort()},${stream.readShort()},${stream.readShort()});">${stream.readUTF()}</span>`); break;
            case 24: case 25: case 26: case 27: { const id = stream.readLong(), ent = entities.get(id); if (ent) ent.isMoving ? ent.queuedMoves.push(opcode - 24) : startMove(ent, opcode - 24); break; }
            case 28: stream.readShort(); break;
            case 35: while(stream.hasMoreData()) { if(stream.readShort() === -1) break; stream.readShort(); stream.readShort(); } break;
            case 36: { const attacker = entities.get(stream.readLong()), defender = entities.get(stream.readLong()), damage = stream.readShort(); if (defender) spawnBloodParticles(attacker, defender, damage); break; }
            case 37: playerTicks = Number(stream.readLong()); break;
            case 38: spawnArmorParticles(entities.get(stream.readLong())); break;
            case 39: spawnRegenerateParticles(entities.get(stream.readLong())); break;
            case 40: spawnDetectInvisParticles(entities.get(stream.readLong())); break;
            case 41: spawnHardenParticles(entities.get(stream.readLong())); break;
            case 42: spawnShockParticles(entities.get(stream.readLong())); break;
            default: return;
        }
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
    const tileRenderSize = canvas.width / MAP_VIEW_WIDTH;
    for (let i = 0; i < MAP_VIEW_WIDTH; i++) for (let j = 0; j < MAP_VIEW_HEIGHT; j++) {
        const tileID = shrMap[i][j]; if (tileID === 0) continue;
        const worldX = (playerLocX - viewRangeX + i) * tileRenderSize, worldY = (playerLocY - viewRangeY + j) * tileRenderSize;
        ctx.drawImage(images.map, tileID * ORIGINAL_TILE_SIZE, 0, ORIGINAL_TILE_SIZE, ORIGINAL_TILE_SIZE, worldX - cameraX, worldY - cameraY, tileRenderSize, tileRenderSize);
    }
}

function drawEntities() {
    if (!images.players || !images.sprites) return;
    const tileRenderSize = canvas.width / MAP_VIEW_WIDTH;
    const sortedEntities = [...entities.values()].sort((a, b) => a.pixelY - b.pixelY);
    for (const entity of sortedEntities) {
        const screenX = entity.pixelX - cameraX, screenY = entity.pixelY - cameraY;
        const spriteRenderSize = tileRenderSize * 2, drawX = screenX, drawY = screenY - tileRenderSize;
        if (entity.step !== -1) ctx.drawImage(images.players, (entity.image * 8 + entity.step) * ORIGINAL_PLAYER_SIZE, 0, ORIGINAL_PLAYER_SIZE, ORIGINAL_PLAYER_SIZE, drawX, drawY, spriteRenderSize, spriteRenderSize);
        else ctx.drawImage(images.sprites, entity.image * ORIGINAL_SPRITE_SIZE, 0, ORIGINAL_SPRITE_SIZE, ORIGINAL_SPRITE_SIZE, drawX, drawY, spriteRenderSize, spriteRenderSize);
        ctx.fillStyle = "white"; ctx.font = "12px 'Verdana'";
        ctx.fillText(entity.name, screenX + tileRenderSize/2 - ctx.measureText(entity.name).width / 2, screenY + tileRenderSize + 5);
    }
}

function drawMapAlpha() {
    if (!images.map_alpha || shrMapAlpha.length === 0) return;
    const tileRenderSize = canvas.width / MAP_VIEW_WIDTH;
    for (let i = 0; i < MAP_VIEW_WIDTH; i++) for (let j = 0; j < MAP_VIEW_HEIGHT; j++) {
        const tileID = shrMapAlpha[i][j]; if (tileID === 0) continue;
        const worldX = (playerLocX - viewRangeX + i) * tileRenderSize, worldY = (playerLocY - viewRangeY + j) * tileRenderSize;
        ctx.drawImage(images.map_alpha, tileID * ORIGINAL_TILE_SIZE, 0, ORIGINAL_TILE_SIZE, ORIGINAL_TILE_SIZE, worldX - cameraX, worldY - cameraY, tileRenderSize, tileRenderSize);
    }
}

function gameLoop() {
    requestAnimationFrame(gameLoop);
    const entityMoveSpeed = TILE_SIZE / (playerTicks / 40.0);
    for (const ent of entities.values()) {
        if (ent.isMoving) {
            const dx = ent.targetX - ent.pixelX, dy = ent.targetY - ent.pixelY, dist = Math.sqrt(dx * dx + dy * dy);
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
    if (player) {
        targetCameraX = player.pixelX - canvas.width / 2 + TILE_SIZE / 2;
        targetCameraY = player.pixelY - canvas.height / 2;
        cameraX += (targetCameraX - cameraX) * 0.1;
        cameraY += (targetCameraY - cameraY) * 0.1;
    }
    ctx.fillStyle = 'black'; ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (isConnected) { drawMap(); drawEntities(); updateAndDrawParticles(); drawMapAlpha(); }
}

async function init() {
    log("Client initializing...");
    await preloadAssets();
    connectButton.addEventListener('click', connect);
    textInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') { sendString(textInput.value); textInput.value = ''; textInput.placeholder = 'Enter command...'; } });
    window.addEventListener('resize', resizeCanvas);
    log("Client initialized. Press 'Connect' to begin.");
    resizeCanvas();
    requestAnimationFrame(gameLoop);
}
init();