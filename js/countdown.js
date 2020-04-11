const getRemainTime =  deadLine => {
	let now =  new Date(),
	remainTime = ( new Date(deadLine) - now + 1000) / 1000,
	remainSeconds = ( '0' + Math.floor( remainTime % 60 ) ).slice( -2 ),
	remainMinutes = ( '0' + Math.floor( remainTime / 60 % 60 ) ).slice( -2 ),
	remainHours = ( '0' + Math.floor( remainTime / 3600 % 24 ) ).slice( -2 ),
	remainDays = Math.floor( remainTime / ( 3600 * 24 ) );
	return {

		remainTime,
		remainSeconds,
		remainMinutes,
		remainHours,
		remainDays

	}
};

const countDown = ( deadLine, elem, finalMessage ) => {
	const el = document.getElementById(elem);

	const timerUpdate = setInterval ( () => {
		let t = getRemainTime( deadLine );
		el.innerHTML = `${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}`;
		if( t.remainTime <= 1 ){
			clearInterval( timerUpdate );
			el.innertHTML = finalMessage;
		}
	}, 1000)
};

countDown( 'Apr 11 2020 18:25:56 GMT-0400' , 'clock', 'feliz 2020');