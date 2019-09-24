import { TIMER_TICK ,TIMER_PAUSE } from './constants';

export function tick(timer, isLaunched) {
    return isLaunched ? {
        type: TIMER_TICK,
        timer: new Date(timer - 1000)
    } : {
        type: TIMER_PAUSE
    }
}

