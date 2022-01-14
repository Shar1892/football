export const createDate = (date) => {
	const dateArr = date.split('');
	dateArr.length = 10;
	return dateArr.join('');
};
