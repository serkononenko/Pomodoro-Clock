import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import * as type from './actions';
import { CssBaseline, Box, Grid } from '@material-ui/core';
import { Layout } from './components/Layout';
import { MainTitle } from './components/MainTitle';
import { LengthControl } from './components/LengthControl';
import { Timer } from './components/Timer';
import { TimerControl } from './components/TimerControl';

function App({ breakLength, sessionLength, isSession, isLaunched, timer, lengthControl, timerControl, tick }) {

	useEffect(() => {
		const interval = setInterval(() => {
			tick(timer, isLaunched);
		}, 1000);
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
								level={breakLength} 
								inc={lengthControl.incBreak} 
								dec={lengthControl.decBreak} 
							/>
            			</Grid>
            			<Grid item xs={6}>
                			<LengthControl 
								title='Session Length' 
								level={sessionLength} 
								inc={lengthControl.incSession}
								dec={lengthControl.decSession}
							/>
            			</Grid>
        			</Grid>
					<Timer timer={`${timer.getMinutes()}:${timer.getSeconds()}`} isSession={isSession} />
					<TimerControl isLaunched={isLaunched} start={timerControl.start} pause={timerControl.pause} reset={timerControl.reset} />
				</Box>
			</Layout>
		</>
	);
}

const mapStateToProps = ({ breakLength, sessionLength, timer, isSession, isLaunched }) => {
	return {
		breakLength,
		sessionLength,
		isSession,
		isLaunched,
		timer
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		lengthControl: {
			incBreak: () => dispatch({type: type.BREAK_LENGTH_UP}),
			decBreak: () => dispatch({type: type.BREAK_LENGTH_DOWN}),
			incSession: () => dispatch({type: type.SESSION_LENGTH_UP}),
			decSession: () => dispatch({type: type.SESSION_LENGTH_DOWN})
		},
		timerControl: {
			start: () => dispatch({type: type.TIMER_START}),
			pause: () => dispatch({type: type.TIMER_PAUSE}),
			reset: () => dispatch({type: type.TIMER_RESET}),
		},
		tick: (timer, isLaunched) => dispatch(type.tick(timer, isLaunched))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);