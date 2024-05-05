'use client';
import { useEffect, useState } from 'react';

export default function Affixes() {
	const [affixes, setAffixes] = useState({});

	useEffect(() => {
		const fetchAffixes = async () => {
			const response = await fetch(
				'https://raider.io/api/v1/mythic-plus/affixes?region=eu&locale=fr'
			);
			const data = await response.json();
			setAffixes(data);
		};
		fetchAffixes();
	}, []);

	return (
		<div className="flex h-auto w-full grow flex-col gap-2 rounded-md bg-indigo-900 p-3 text-center">
			Affixes de la semaine:
			<div className="flex justify-center gap-2 md:flex-col">
				{affixes.affix_details &&
					affixes.affix_details.map((affix) => {
						return <span key={affix.id}>{affix.name}</span>;
					})}
			</div>
		</div>
	);
}
