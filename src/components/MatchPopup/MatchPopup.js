import './MatchPopup.css';
import {createDate} from '../../utils/utils';

const MatchPopup = ({match, isOpen, popupClose}) => {
	const handleClose = (evt) => {
		if (evt.target === evt.currentTarget) {
			popupClose();
		}
	};

	return (
		<div
			className={`popup__overlay ${isOpen ? 'popup__overlay_visible' : ''}`}
			onClick={handleClose}
		>
			{match.tourNumber && (
				<div className='popup'>
					<p className='popup__tour-number'>{'Tour ' + match.tourNumber}</p>
					<div className='popup__competitor-container'>
						<p className='popup__competitor-name'>{match.teamHome.name}</p>
						<p className='popup__competitor-score'>{match.scoreFtHome}</p>
					</div>
					<div className='popup__competitor-container'>
						<p className='popup__competitor-name'>{match.teamAway.name}</p>
						<p className='popup__competitor-score'>{match.scoreFtAway}</p>
					</div>
					<p className='popup__date'>{'Date - ' + createDate(match.date)}</p>
					{match.stadium && (
						<p className='popup__stadium'>{'Stadium ' + match.stadium.name}</p>
					)}
				</div>
			)}
		</div>
	);
};

export default MatchPopup;
