'use client';
import { signOut } from 'next-auth/react';

export default function SignOut() {
	return (
		<button
			onClick={() => signOut()}
			className="flex items-center rounded-md bg-indigo-600 px-3 py-2 text-base"
		>
			<div className="block md:block">Déconnexion</div>
		</button>
	);
}
