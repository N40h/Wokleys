import { createSlice } from '@reduxjs/toolkit';

const characterSlice = createSlice({
	name: 'character',
	initialState: {
		selectedCharacter: null,
		characterName: '',
		selectedRealm: '',
		thumbnail_url: '',
		mythic_plus_scores: [],
		mythic_plus_highest_runs: [],
		mythic_plus_weekly_highest_runs: [],
		mythic_plus_rank: '',
	},
	reducers: {
		setSelectedCharacter(state, action) {
			state.selectedCharacter = action.payload;
		},
		setCharacterName(state, action) {
			state.characterName = action.payload;
		},
		setSelectedRealm(state, action) {
			state.selectedRealm = action.payload;
		},
		setThumbnailUrl(state, action) {
			state.thumbnail_url = action.payload;
		},
		setMythicPlusScores(state, action) {
			state.mythic_plus_scores = action.payload;
		},
		setMythicPlusHighestRuns(state, action) {
			state.mythic_plus_highest_runs = action.payload;
		},
		setMythicPlusWeeklyHighestRuns(state, action) {
			state.mythic_plus_weekly_highest_runs = action.payload;
		},
		setMythicPlusRank(state, action) {
			state.mythic_plus_rank = action.payload;
		},
	},
});

export const {
	setSelectedCharacter,
	setCharacterName,
	setSelectedRealm,
	setThumbnailUrl,
	setMythicPlusScores,
	setMythicPlusHighestRuns,
	setMythicPlusWeeklyHighestRuns,
	setMythicPlusRank,
} = characterSlice.actions;
export default characterSlice.reducer;
