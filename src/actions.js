import * as types from './constants';

export function startStop(isLaunched) {
    return isLaunched ? {
        type: types.TIMER_STOP        
    } : {
        type: types.TIMER_START
    }
}

export function tick(timer, breakTimer, breakLength, sessionLength) {
    if (breakTimer.getMinutes() === 0 && breakTimer.getSeconds() === 0) {
        return {
            type: types.RESET_SESSION_TIMER,
            timer: new Date(0, 0, 0, 0, sessionLength),
            breakTimer: new Date(0, 0, 0, 0, breakLength)
        }
    }

    if (timer.getMinutes() === 0 && timer.getSeconds() === 0) {
        return {
            type: types.BREAK_TIMER_TICK,
            breakTimer: new Date(breakTimer - 1000)
        }
    }
    return {
        type: types.SESSION_TIMER_TICK,
        timer: new Date(timer - 1000)
    }
}

export function incrementSession(timer) {
    const minutes = timer.getMinutes();
    if (minutes !== 0) timer.setMinutes(minutes + 1);
    return {
        type: types.SESSION_LENGTH_UP,
        sessionLength: timer.getMinutes() === 0 ? 60: timer.getMinutes(),
        timer
    }
}

export function decrementSession(timer) {
    const minutes = timer.getMinutes();
    if (minutes !== 1) timer.setMinutes(minutes - 1);
    return {
        type: types.SESSION_LENGTH_DOWN,
        sessionLength: timer.getMinutes(),
        timer
    }
}

export function incrementBreak(timer) {
    const minutes = timer.getMinutes();
    if (minutes !== 0) timer.setMinutes(minutes + 1);
    return {
        type: types.BREAK_LENGTH_UP,
        breakLength: timer.getMinutes() === 0 ? 60: timer.getMinutes(),
        breakTimer: timer
    }
}

export function decrementBreak(timer) {
    const minutes = timer.getMinutes();
    if (minutes !== 1) timer.setMinutes(minutes - 1);
    return {
        type: types.BREAK_LENGTH_DOWN,
        breakLength: timer.getMinutes(),
        breakTimer: timer
    }
}

