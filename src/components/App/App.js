import {useState, useEffect} from 'react';

import './App.css';

import * as Api from '../../utils/api';

import MatchList from '../MatchList/MatchList';
import MatchPopup from '../MatchPopup/MatchPopup';

function App() {
	const [matchs, setMatchs] = useState([]);
	const [selectedMatch, setSelectedMatch] = useState({});
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [numberLoadedMatches, setNumberLoadedMatches] = useState(10);

	const handlePopupOpen = (match) => {
		setSelectedMatch(match);
		setIsPopupOpen(true);
		setEventListeners();
	};

	const popupClose = () => {
		setIsPopupOpen(false);
		document.removeEventListener('keydown', handleEscClose);
	};

	const setEventListeners = () => {
		document.addEventListener('keydown', handleEscClose);
	};

	const handleEscClose = (evt) => {
		if (evt.key === 'Escape') {
			popupClose();
		}
	};

	const handleShowMore = () => {
		let newNumberLoadedMatches = numberLoadedMatches + 5;
		setNumberLoadedMatches(newNumberLoadedMatches);
		Api.getMatchs(newNumberLoadedMatches).then((matchList) => {
			setMatchs(matchList.items);
		});
	};

	useEffect(() => {
		Api.getMatchs(numberLoadedMatches).then((matchList) => {
			setMatchs(matchList.items);
		});
	}, []);

	return (
		<div className='app'>
			<MatchList matchs={matchs} openPopup={handlePopupOpen} />
			<MatchPopup
				match={selectedMatch}
				isOpen={isPopupOpen}
				popupClose={popupClose}
			/>
			<button className='app__button' onClick={handleShowMore}>
				More
			</button>
		</div>
	);
}

export default App;
