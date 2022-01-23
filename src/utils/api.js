//const BASE_URL =
//	'https://footballista.ru/api/seasons/5099/calendar_paginated?limit=15&offset=0';

const BASE_URL =
	'https://footballista.ru/api/seasons/5099/calendar_paginated?limit=';

export const getMatchs = (size) => {
	return fetch(`${BASE_URL}${size}'&offset=0'`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
		})
		.then((data) => data);
};
