import NextAuth from 'next-auth';
import BattleNet from 'next-auth/providers/battlenet';

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		BattleNet({
			clientId: process.env.AUTH_BATTLENET_ID,
			clientSecret: process.env.AUTH_BATTLENET_SECRET,
			issuer: process.env.AUTH_BATTLENET_ISSUER,
			authorization: {
				params: {
					state: 'AbCdEfG',
					scope: 'wow.profile openid',
				},
			},
		}),
	],
	callbacks: {
		async jwt({ token, account, profile }) {
			if (account) {
				token.accessToken = account.access_token;
				token.id = profile.id;
			}
			return token;
		},
		async session({ session, token }) {
			session.user.id = token.id;
			session.accessToken = token.accessToken;
			return session;
		},
	},
});
