import Image from 'next/image';
import { auth } from '../lib/auth';
import SignOutButton from './SignOutButton';

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
			{session && <SignOutButton />}
		</header>
	);
}
