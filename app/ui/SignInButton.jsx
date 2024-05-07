'use client';
import { signIn } from 'next-auth/react';

export default function SignIn() {
	return (
		<button
			onClick={() => signIn()}
			className="self-start rounded-md border border-solid border-gray-300 bg-indigo-600 px-3 py-2 text-base"
		>
			<div className="block md:block">Connexion avec Battle.net</div>
		</button>
	);
}
