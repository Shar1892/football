import {useState, useEffect} from 'react';

import './App.css';

import * as Api from '../../utils/api';

import MatchList from '../MatchList/MatchList';
import MatchPopup from '../MatchPopup/MatchPopup';

function App() {
	const [matchs, setMatchs] = useState([]);
	const [selectedMatch, setSelectedMatch] = useState({});
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const handlePopupOpen = (match) => {
		setSelectedMatch(match);
		setIsPopupOpen(true);
		console.log(match);
	};

	const popupClose = () => {
		setIsPopupOpen(false);
		console.log('Close');
	};

	const handleEscClose = (evt) => {
		if (evt.key === 'Escape') {
			popupClose();
		}
	};

	useEffect(() => {
		Api.getMatchs().then((matchList) => {
			setMatchs(matchList.items);
			//console.log(matchList);
			//console.log(matchList.items);
		});
	}, []);

	return (
		<div className='App'>
			<MatchList matchs={matchs} openPopup={handlePopupOpen} />
			<MatchPopup
				match={selectedMatch}
				isOpen={isPopupOpen}
				popupClose={popupClose}
			/>
		</div>
	);
}

export default App;
