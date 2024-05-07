import Image from 'next/image';
import { useSelector } from 'react-redux';

export default function CharactersInfos() {
	const characterName = useSelector((state) => state.character.characterName);
	const thumbnail_url = useSelector((state) => state.character.thumbnail_url);
	const mythicPlusScores = useSelector(
		(state) => state.character.mythic_plus_scores
	);
	return (
		<div>
			<div className="flex gap-4">
				<div>
					<Image
						src={thumbnail_url}
						alt={`Avatar de ${characterName}`}
						width={150}
						height={150}
						className="rounded-full border border-solid border-zinc-950"
					/>
				</div>
				<div>
					<h2>{characterName}</h2>
					<p>{mythicPlusScores}</p>
				</div>
			</div>
		</div>
	);
}
