'use client';
import { useEffect, useRef, useState } from 'react';

export default function CharacterBanner({ accessToken }) {
	const [charactersBanner, setCharactersBanner] = useState([]);
	const bearerToken = accessToken;
	const hasFetched = useRef(false);

	useEffect(() => {
		const fetchCharactersBanner = async () => {
			if (hasFetched.current) return;
			const response = await fetch(
				'https://eu.api.blizzard.com/profile/wow/character/hyjal/naøbrewh/character-media?namespace=profile-eu',
				{
					headers: {
						Authorization: `Bearer ${bearerToken}`,
					},
				}
			);

			if (response.ok) {
				const data = await response.json();
				setCharactersBanner(data.assets[2].value);
			}
		};
		fetchCharactersBanner();
	}, []);

	return <div></div>;
}
