import {useState, useEffect} from 'react';

import './Match.css';
import {createDate} from '../../utils/utils';

const Match = ({match, openPopup}) => {
	useEffect(() => {
		let stadium = match.stadium;
		console.log(match);
	}, []);

	const openMatchPopup = () => {
		openPopup(match);
	};

	//const createDate = (date) => {
	//	const dateArr = date.split('');
	//	dateArr.length = 10;
	//	return dateArr.join('');
	//};

	return (
		<div className='match' onClick={openMatchPopup}>
			<p className='match__tour-number'>{'Tour ' + match.tourNumber}</p>
			<div className='match__competitor-container'>
				<p className='match__competitor-name'>{match.teamHome.name}</p>
				<p className='match__competitor-score'>{match.scoreFtHome}</p>
			</div>
			<div className='match__competitor-container'>
				<p className='match__competitor-name'>{match.teamAway.name}</p>
				<p className='match__competitor-score'>{match.scoreFtAway}</p>
			</div>
			<p className='match__date'>{'Date - ' + createDate(match.date)}</p>
			{match.stadium && (
				<p className='match__stadium'>{'Stadium - ' + match.stadium.name}</p>
			)}
		</div>
	);
};

export default Match;

// <p className='match__stadium'>{match.stadium.name}</p>
