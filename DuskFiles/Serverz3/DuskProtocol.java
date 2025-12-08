public interface DuskProtocol {
    // Shared message type constants
    public static final int MSG_DISCONNECT = 0;
    public static final int MSG_RC_INFO = 1;
    public static final int MSG_MAP = 2;
    public static final int MSG_CHAT = 3;
    public static final int MSG_ADD_ENTITY = 4;
    public static final int MSG_UPDATE_INFO = 5;
    public static final int MSG_UPDATE_ITEMS = 6;
    public static final int MSG_UPDATE_EQUIPMENT = 7;
    public static final int MSG_UPDATE_STATS = 8;
    public static final int MSG_PROMPT_HALT = 9;
    public static final int MSG_UPDATE_ACTIONS = 10;
    public static final int MSG_UPDATE_MUSIC = 11;
    public static final int MSG_PLAY_MUSIC = 12;
    public static final int MSG_STILL_THERE = 13;
    public static final int MSG_PROMPT_PROCEED = 14;
    public static final int MSG_PLAY_SFX = 15;
    public static final int MSG_REMOVE_ENTITY = 16;
    public static final int MSG_MERCHANT_ITEMS = 17;
    public static final int MSG_VIEW_TEXT_EDITABLE = 18;
    public static final int MSG_RESIZE_MAP = 19;
    public static final int MSG_VIEW_TEXT = 20;
    public static final int MSG_MERCHANT_CLOSE = 21;
    public static final int MSG_MERCHANT_SELL = 22;
    public static final int MSG_CHAT_COLOR = 23;
    public static final int MSG_MOVE_N = 24;
    public static final int MSG_MOVE_S = 25;
    public static final int MSG_MOVE_W = 26;
    public static final int MSG_MOVE_E = 27;
    public static final int MSG_UPDATE_RANGE = 28;
    public static final int MSG_UPDATE_FLAG = 29;
    public static final int MSG_CLEAR_FLAGS = 30;
    public static final int MSG_BATTLE_START_TARGET = 31;
    public static final int MSG_BATTLE_TEXT_TOP = 32;
    public static final int MSG_BATTLE_TEXT_BOTTOM = 33;
    public static final int MSG_UPDATE_OPPONENT_HP = 34;
    public static final int MSG_TILE_ANIMS = 35;
    public static final int MSG_DAMAGE_SPLAT = 36;
    public static final int MSG_PLAYER_TICKS = 37;
    public static final int MSG_EFFECT_ARMOR = 38;
    public static final int MSG_EFFECT_REGENERATE = 39;
    public static final int MSG_EFFECT_DETECT_INVIS = 40;
    public static final int MSG_EFFECT_HARDEN = 41;
    public static final int MSG_EFFECT_SHOCK = 42;
    public static final int MSG_PLAY_LOCATION_MUSIC = 60;
    public static final int MSG_STOP_LOCATION_MUSIC = 61;

    // Client-to-server
    public static final int MSG_COMMAND = 100; // Using a higher number to avoid conflict
}
