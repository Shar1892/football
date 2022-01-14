const BASE_URL =
	'https://footballista.ru/api/seasons/5099/calendar_paginated?limit=10&offset=0';

export const getMatchs = () => {
	return fetch(`${BASE_URL}`, {
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
