const BREAK_LENGTH_UP = 'BREAK_LENGTH_UP';
const BREAK_LENGTH_DOWN = 'BREAK_LENGTH_DOWN';

const SESSION_LENGTH_UP = 'SESSION_LENGTH_UP';
const SESSION_LENGTH_DOWN = 'SESSION_LENGTH_DOWN';

const TIMER_START = 'TIMER_START';
const TIMER_PAUSE = 'TIMER_PAUSE';
const TIMER_RESET = 'TIMER_RESET';

const TIMER_TICK = 'TIMER_TICK';

export {
    BREAK_LENGTH_UP,
    BREAK_LENGTH_DOWN,
    SESSION_LENGTH_UP,
    SESSION_LENGTH_DOWN,
    TIMER_START,
    TIMER_PAUSE,
    TIMER_RESET,
    TIMER_TICK
};

export function tick(timer, isLaunched) {
    return isLaunched ? {
        type: TIMER_TICK,
        timer: new Date(timer - 1000)
    } : {
        type: TIMER_PAUSE
    }
}

