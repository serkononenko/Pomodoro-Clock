import * as type from './constants';

const initialState = {
    breakLength: 5,
    sessionLength: 25,
    isSession: true,
    isLaunched: false,
    timer: new Date(0, 0, 0, 0, 25)
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case type.BREAK_LENGTH_DOWN:
            return {
                ...state,
                breakLength: state.breakLength < 2 ? state.breakLength : state.breakLength - 1
            };
        case type.BREAK_LENGTH_UP:
            return {
                ...state,
                breakLength: state.breakLength + 1
            };
        case type.SESSION_LENGTH_DOWN:
            return {
                ...state,
                sessionLength: state.sessionLength < 2 ? state.sessionLength : state.sessionLength - 1,
                timer: new Date(0, 0, 0, 0, state.sessionLength - 1)
            };
        case type.SESSION_LENGTH_UP:
            return {
                ...state,
                sessionLength: state.sessionLength + 1,
                timer: new Date(0, 0, 0, 0, state.sessionLength + 1)
            };
        case type.TIMER_TICK:
            return {
                ...state,
                timer: action.timer
            };
        case type.TIMER_START:
            return {
                ...state,
                isLaunched: true
            };
        case type.TIMER_PAUSE:
            return {
                ...state,
                isLaunched: false
            }
        case type.TIMER_RESET:
            return {
                ...state,
                ...initialState
            }
        default: return state;
    }
}