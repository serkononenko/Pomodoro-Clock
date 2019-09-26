import * as type from './constants';

const initialState = {
    breakLength: 5,
    sessionLength: 25,
    isSession: true,
    isLaunched: false,
    timer: new Date(0, 0, 0, 0, 25),
    breakTimer: new Date(0, 0, 0, 0, 5, 1)
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case type.BREAK_LENGTH_DOWN:
            return {
                ...state,
                breakLength: action.breakLength,
                breakTimer: action.breakTimer
            };
        case type.BREAK_LENGTH_UP:
            return {
                ...state,
                breakLength: action.breakLength,
                breakTimer: action.breakTimer
            };
        case type.SESSION_LENGTH_DOWN:
            return {
                ...state,
                sessionLength: action.sessionLength,
                timer: action.timer
            };
        case type.SESSION_LENGTH_UP:
            return {
                ...state,
                sessionLength: action.sessionLength,
                timer: action.timer
            };
        case type.SESSION_TIMER_TICK:
            return {
                ...state,
                timer: action.timer
            };
        case type.BREAK_TIMER_TICK:
            return {
                ...state,
                isSession: false,
                breakTimer: action.breakTimer
            };
        case type.RESET_SESSION_TIMER:
            return {
                ...state,
                isLaunched: true,
                isSession: true,
                timer: action.timer,
                breakTimer: action.breakTimer
            }
        case type.TIMER_START:
            return {
                ...state,
                isLaunched: true
            };
        case type.TIMER_STOP:
            return {
                ...state,
                isLaunched: false
            };
        case type.TIMER_RESET:
            return {
                ...state,
                ...initialState,
                timer: new Date(0, 0, 0, 0, 25),
                breakTimer: new Date(0, 0, 0, 0, 5, 1)
            }
        default: return state;
    }
}