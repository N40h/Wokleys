'use server';
import { redirect } from 'next/navigation';
import { auth } from '../lib/auth';
import Content from '../ui/Content';

async function getSession() {
	const session = await auth();
	if (session) {
		return session.accessToken;
	}
}

async function fetchAffixes() {
	const response = await fetch(
		'https://raider.io/api/v1/mythic-plus/affixes?region=eu&locale=fr'
	);

	if (response.ok) {
		return response.json();
	} else {
		throw new Error('Failed to fetch affixes');
	}
}

async function fetchCharacters(bearerToken) {
	const response = await fetch(
		'https://eu.api.blizzard.com/profile/user/wow?namespace=profile-eu',
		{
			headers: {
				Authorization: `Bearer ${bearerToken}`,
			},
		}
	);

	if (response.ok) {
		const data = await response.json();
		const charactersData = data.wow_accounts[0].characters;

		const level70Characters = charactersData.filter(
			(character) => character.level === 70
		);
		const realmList = [
			...new Set(
				charactersData.map((character) => character.realm.name.en_US)
			),
		];
		const charactersWithMedia = await Promise.all(
			level70Characters.map(async (character) => {
				const mediaResponse = await fetch(
					`https://eu.api.blizzard.com/profile/wow/character/${
						character.realm.slug
					}/${character.name.toLowerCase()}/character-media?namespace=profile-eu`,
					{
						headers: {
							Authorization: `Bearer ${bearerToken}`,
						},
					}
				);

				if (mediaResponse.ok) {
					const mediaData = await mediaResponse.json();
					return {
						...character,
						avatar: mediaData.assets[0].value,
					};
				}

				return {
					...character,
					avatar: 'https://robohash.org/notfound',
				};
			})
		);

		return charactersWithMedia;
	}
}

export default async function Page() {
	const bearerToken = await getSession();
	const affixes = await fetchAffixes();
	const characters = await fetchCharacters(bearerToken);

	if (!bearerToken) {
		redirect('/');
	}

	return (
		<>
			<Content affixes={affixes} characters={characters} />
		</>
	);
}
