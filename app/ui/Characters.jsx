'use client';
require('dotenv').config();
import { useEffect, useState } from 'react';

export default function Characters() {
	const [characters, setCharacters] = useState([]);
	const [token, setToken] = useState('');

	useEffect(() => {
		const getToken = async () => {
			const credentials = Buffer.from(
				`${process.env.AUTH_BATTLENET_ID}:${process.env.AUTH_BATTLENET_SECRET}`
			).toString('base64');
			console.log(process.env.AUTH_BATTLENET_ID);
			console.log(process.env.AUTH_BATTLENET_SECRET);
			const response = await fetch('https://oauth.battle.net/token', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					Authorization: `Basic ${credentials}`,
				},
				body: 'grant_type=client_credentials',
			});

			if (response.ok) {
				const data = await response.json();
				setToken(data.access_token);
			}
		};
		getToken();
	}, [token]);

	console.table(token);

	// useEffect(() => {
	// 	const fetchCharacters = async () => {
	// 		const response = await fetch(
	// 			'https://us.api.blizzard.com/profile/user/wow',
	// 			{
	// 				headers: {
	// 					Authorization: `Bearer ${sessionTokenValue}`,
	// 					'Battlenet-Namespace': 'profile-eu',
	// 				},
	// 			}
	// 		);

	// 		if (response.ok) {
	// 			const data = await response.json();
	// 			setCharacters(data.characters);
	// 			console.log(characters);
	// 		}
	// 	};
	// 	fetchCharacters();
	// }, [characters, sessionTokenValue]);

	return <div>Characters</div>;
}
