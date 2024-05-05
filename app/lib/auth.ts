import NextAuth from 'next-auth';
import BattleNet from 'next-auth/providers/battlenet';

type BattleNetIssuer =
	| 'https://www.battlenet.com.cn/oauth'
	| 'https://us.battle.net/oauth'
	| 'https://eu.battle.net/oauth'
	| 'https://kr.battle.net/oauth'
	| 'https://tw.battle.net/oauth';

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		BattleNet({
			clientId: process.env.AUTH_BATTLENET_ID,
			clientSecret: process.env.AUTH_BATTLENET_SECRET,
			issuer: process.env.AUTH_BATTLENET_ISSUER as BattleNetIssuer,
			authorization: {
				params: {
					state: 'AbCdEfG',
					scope: 'wow.profile openid',
				},
			},
		}),
	],
});
