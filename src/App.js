import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import * as type from './constants';
import { startStop, tick, incrementSession, decrementSession, incrementBreak, decrementBreak } from './actions'
import { CssBaseline, Box, Grid } from '@material-ui/core';
import { Layout } from './components/Layout';
import { MainTitle } from './components/MainTitle';
import { LengthControl } from './components/LengthControl';
import { Timer } from './components/Timer';
import { TimerControl } from './components/TimerControl';

function App({ breakLength, breakTimer, sessionLength, timer, isSession, isLaunched, isPlaying, lengthControl, timerControl, tick }) {
	useEffect(() => {
		const audio = document.querySelector('#beep');
		if (isPlaying) {
			audio.play();
		} else {
			audio.pause();
			audio.currentTime = 0;
		}
	})

	useEffect(() => {
		let interval;
		if (isLaunched) {
			interval = setInterval(() => {
				tick(timer, breakTimer, breakLength, sessionLength);
			}, 100);
		}
		return () => clearInterval(interval);
	})

	return (
		<>
			<CssBaseline />
			<Layout>
				<Box id='app'>
					<MainTitle />
					<Grid container justify='space-between'>
            			<Grid item xs={6}>
                			<LengthControl 
								title='Break Length'
								id='break' 
								level={breakLength} 
								inc={lengthControl.incBreak} 
								dec={lengthControl.decBreak}
								timer={breakTimer} 
							/>
            			</Grid>
            			<Grid item xs={6}>
                			<LengthControl 
								title='Session Length'
								id='session' 
								level={sessionLength} 
								inc={lengthControl.incSession}
								dec={lengthControl.decSession}
								timer={timer}
							/>
            			</Grid>
        			</Grid>
					<Timer timer={isSession ? timer : breakTimer} isSession={isSession} />
					<TimerControl isLaunched={isLaunched} startStop={timerControl.startStop} reset={timerControl.reset} />
					<audio id='beep' src='https://goo.gl/65cBl1'></audio>
				</Box>
			</Layout>
		</>
	);
}

const mapStateToProps = ({ breakLength, sessionLength, timer, breakTimer, isSession, isLaunched, isPlaying }) => {
	return {
		breakLength,
		sessionLength,
		isSession,
		isLaunched,
		isPlaying,
		timer,
		breakTimer
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		lengthControl: {
			incBreak: (timer) => dispatch(incrementBreak(timer)),
			decBreak: (timer) => dispatch(decrementBreak(timer)),
			incSession: (timer) => dispatch(incrementSession(timer)),
			decSession: (timer) => dispatch(decrementSession(timer))
		},
		timerControl: {
			startStop: (isLaunched) => dispatch(startStop(isLaunched)),
			reset: () => dispatch({type: type.TIMER_RESET}),
		},
		tick: (timer, breakTimer, breakLength, sessionLength) => dispatch(tick(timer, breakTimer, breakLength, sessionLength))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);