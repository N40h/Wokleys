import {
	setCharacterName,
	setMythicPlusHighestRuns,
	setMythicPlusRank,
	setMythicPlusScores,
	setMythicPlusWeeklyHighestRuns,
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

export const fetchMythicPlusHighestRuns = (realm, name) => {
	return async (dispatch) => {
		try {
			const response = await fetch(
				`https://raider.io/api/v1/characters/profile?region=eu&realm=${realm}&name=${name}&fields=mythic_plus_highest_level_runs`
			);

			if (response.ok) {
				const data = await response.json();
				dispatch(
					setMythicPlusHighestRuns(
						data.mythic_plus_highest_level_runs
					)
				);
			}
		} catch (error) {
			console.error(error);
		}
	};
};

export const fetchMythicPlusWeeklyHighestRuns = (realm, name) => {
	return async (dispatch) => {
		try {
			const response = await fetch(
				`https://raider.io/api/v1/characters/profile?region=eu&realm=${realm}&name=${name}&fields=mythic_plus_weekly_highest_level_runs`
			);

			if (response.ok) {
				const data = await response.json();
				dispatch(
					setMythicPlusWeeklyHighestRuns(
						data.mythic_plus_weekly_highest_level_runs
					)
				);
			}
		} catch (error) {
			console.error(error);
		}
	};
};

export const fetchMythicPlusRank = (realm, name) => {
	return async (dispatch) => {
		try {
			const response = await fetch(
				`https://raider.io/api/v1/characters/profile?region=eu&realm=${realm}&name=${name}&fields=mythic_plus_ranks`
			);

			if (response.ok) {
				const data = await response.json();
				dispatch(setMythicPlusRank(data.mythic_plus_ranks.overall));
			}
		} catch (error) {
			console.error(error);
		}
	};
};
