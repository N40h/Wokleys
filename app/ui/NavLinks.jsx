'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	fetchMythicPlusScoresCurrentSeason,
	fetchProfile,
} from '../lib/services/api';

export default function NavLinks({ characters }) {
	const dispatch = useDispatch();
	const [realms, setRealms] = useState([]);
	const [selectedRealm, setSelectedRealm] = useState('');

	useEffect(() => {
		const realmList = [
			...new Set(
				characters.map((character) => character.realm.name.en_US)
			),
		];
		setRealms(realmList);
	}, [characters]);

	const handleRealmChange = (e) => {
		setSelectedRealm(e.target.value);
	};

	const handleCharacterClick = (realm, name) => {
		dispatch(fetchProfile(realm, name));
		dispatch(fetchMythicPlusScoresCurrentSeason(realm, name));
	};

	return (
		<>
			<select
				name="realm"
				id="realm-select"
				className="rounded-md border-4 border-solid border-indigo-700 text-neutral-950 outline-none"
				onChange={handleRealmChange}
			>
				<option value="">Choisis ton serveur</option>
				{realms.map((realm, index) => (
					<option key={index} value={realm}>
						{realm}
					</option>
				))}
			</select>
			{characters
				.filter(
					(character) => character.realm.name.en_US === selectedRealm
				)
				.map((character, index) => {
					return (
						<div
							key={index}
							className="flex h-10 grow cursor-pointer items-center gap-2 rounded-md bg-indigo-600 p-2 text-sm md:flex-none"
							onClick={() =>
								handleCharacterClick(
									character.realm.slug,
									character.name
								)
							}
						>
							<Image
								src={character.avatar}
								alt={`Avatar de ${character.name}`}
								width={30}
								height={30}
								className="rounded-full border border-solid border-zinc-950"
							/>
							<p>{character.name}</p>
						</div>
					);
				})}
		</>
	);
}
