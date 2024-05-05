import Image from 'next/image';
import { auth, signOut } from '../lib/auth';

export default async function Header() {
	const session = await auth();

	return (
		<header className="m-auto flex justify-between bg-transparent p-5 sm:p-6 md:p-7 lg:p-8 xl:p-9">
			<div className="flex items-center gap-4">
				<Image
					src="/logo.png"
					alt="logo"
					width={40}
					height={40}
					className="rounded-full border border-solid border-indigo-400"
				/>
				<span className="text-xl font-bold uppercase tracking-widest shadow-lg">
					Wokleys
				</span>
			</div>
			{session && (
				<form
					action={async (formData) => {
						'use server';
						await signOut();
					}}
				>
					<button
						type="submit"
						className="flex items-center rounded-md bg-indigo-600 px-3 py-2 text-base"
					>
						<div className="block md:block">Déconnexion</div>
					</button>
				</form>
			)}
		</header>
	);
}
