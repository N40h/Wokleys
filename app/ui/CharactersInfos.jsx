import Image from 'next/image';
import { useSelector } from 'react-redux';

export default function CharactersInfos() {
	const selectedCharacter = useSelector(
		(state) => state.character.selectedCharacter
	);
	const characterName = useSelector((state) => state.character.characterName);
	const thumbnail_url = useSelector((state) => state.character.thumbnail_url);
	const mythicPlusScores = useSelector(
		(state) => state.character.mythic_plus_scores
	);
	const mythicPlusHighestRuns = useSelector(
		(state) => state.character.mythic_plus_highest_runs
	);
	const mythicPlusWeeklyHighestRuns = useSelector(
		(state) => state.character.mythic_plus_weekly_highest_runs
	);
	const mythicPlusRank = useSelector(
		(state) => state.character.mythic_plus_rank
	);

	return selectedCharacter ? (
		<>
			<div className="mb-10 flex w-full gap-10 p-5">
				<div className="flex items-center">
					{thumbnail_url ? (
						<Image
							src={thumbnail_url}
							alt={`Avatar de ${characterName}`}
							width={150}
							height={150}
							className="rounded-full border border-solid border-zinc-950"
						/>
					) : (
						<p>Loading avatar...</p>
					)}
				</div>
				<div className="flex grow flex-col gap-5 text-xl md:grow-0 lg:w-1/2">
					<div className="flex items-stretch justify-between">
						<p className="text-3xl">{characterName}</p>
						<p>Score M+ {mythicPlusScores}</p>
					</div>
					<div className="flex flex-col gap-2">
						<p className="text-center">Classement du personnage:</p>
						<div className="flex justify-between">
							<p>World: {mythicPlusRank.world}</p>
							<p>Region: {mythicPlusRank.region}</p>
							<p>Serveur: {mythicPlusRank.realm}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="mb-10 flex w-full flex-col gap-6">
				<p>Dix plus hautes clés de la saison :</p>
				<div className="flex flex-wrap gap-4">
					{mythicPlusHighestRuns.map((run, index) => (
						<p key={index}>{run}</p>
					))}
					<p>test</p>
					<p>test</p>
					<p>test</p>
					<p>test</p>
					<p>test</p>
					<p>test</p>
					<p>test</p>
					<p>test</p>
					<p>test</p>
					<p>test</p>
				</div>
			</div>
			<div className="mb-10 flex w-full flex-col gap-6">
				<p>Dix plus hautes clés de la semaine :</p>
				<div className="flex flex-wrap gap-4">
					{mythicPlusWeeklyHighestRuns.map((run, index) => (
						<p key={index}>{run}</p>
					))}
					<p>test</p>
					<p>test</p>
					<p>test</p>
					<p>test</p>
					<p>test</p>
					<p>test</p>
					<p>test</p>
					<p>test</p>
					<p>test</p>
					<p>test</p>
				</div>
			</div>
		</>
	) : (
		<p className="text-center">
			Sélectionnez un serveur puis un personnage
		</p>
	);
}
