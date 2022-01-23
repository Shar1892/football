import './MatchList.css';
import Match from '../Match/Match';

const MatchList = ({matchs, openPopup}) => {
	return (
		<div className='matchList'>
			<p className='matchList__title'>AFL Moscow 8x8</p>
			<div className='matchList__container'>
				{matchs.map((item, i) => (
					<Match match={item} key={item._id} openPopup={openPopup} />
				))}
			</div>
		</div>
	);
};

export default MatchList;
