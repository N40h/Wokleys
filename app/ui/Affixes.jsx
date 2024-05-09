async function fetchAffixes() {
	const response = await fetch(
		'https://raider.io/api/v1/mythic-plus/affixes?region=eu&locale=fr'
	);

	await new Promise((resolve) => setTimeout(resolve, 1000));

	const affixes = await response.json();
	return affixes;
}

export default async function Affixes() {
	const affixes = await fetchAffixes();

	return (
		<div className="flex h-auto w-full grow flex-col gap-2 rounded-md bg-indigo-900 p-3 text-center">
			Affixes de la semaine:
			<div className="flex justify-center gap-2 md:flex-col">
				{affixes.affix_details.map((affix) => {
					return <span key={affix.id}>{affix.name}</span>;
				})}
			</div>
		</div>
	);
}
