export default function Affixes({ affixes }) {
	const affixesData = affixes;

	return (
		<div className="flex h-auto w-full grow flex-col gap-2 rounded-md bg-indigo-900 p-3 text-center">
			Affixes de la semaine:
			<div className="flex justify-center gap-2 md:flex-col">
				{affixesData.affix_details &&
					affixesData.affix_details.map((affix) => {
						return <span key={affix.id}>{affix.name}</span>;
					})}
			</div>
		</div>
	);
}
