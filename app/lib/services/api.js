import {
	setCharacterName,
	setMythicPlusScores,
	setSelectedRealm,
	setThumbnailUrl,
} from '../reducers/characterSlice';

export const fetchProfile = (realm, name) => {
	return async (dispatch) => {
		try {
			const response = await fetch(
				`https://raider.io/api/v1/characters/profile?region=eu&realm=${realm}&name=${name}`
			);

			if (response.ok) {
				const data = await response.json();
				dispatch(setCharacterName(data.name));
				dispatch(setSelectedRealm(data.realm));
				dispatch(setThumbnailUrl(data.thumbnail_url));
			}
		} catch (error) {
			console.error(error);
		}
	};
};

export const fetchMythicPlusScoresCurrentSeason = (realm, name) => {
	return async (dispatch) => {
		try {
			const response = await fetch(
				`https://raider.io/api/v1/characters/profile?region=eu&realm=${realm}&name=${name}&fields=mythic_plus_scores_by_season%3Acurrent`
			);

			if (response.ok) {
				const data = await response.json();
				console.log(data);
				dispatch(
					setMythicPlusScores(
						data.mythic_plus_scores_by_season[0].scores.all
					)
				);
			}
		} catch (error) {
			console.error(error);
		}
	};
};
