import Image from 'next/image';
import { signIn } from '../lib/auth';

export default function Hero() {
	return (
		<>
			<div className="flex flex-col gap-5 rounded-xl p-8 md:w-4/5 md:justify-center lg:w-1/2 lg:gap-8">
				<h1 className="text-2xl font-semibold md:text-3xl lg:text-4xl xl:text-6xl">
					Bienvenue sur Wokleys
				</h1>
				<p className="text-pretty text-base lg:text-lg xl:text-xl">
					Un outil simple et rapide afin de suivre l&apos;avancement
					de vos clés <span>mythiques plus</span> pour votre coffre
					hebdomadaire sur l&apos;ensemble de vos personnages.
				</p>
				<form
					action={async () => {
						'use server';
						await signIn('battlenet');
					}}
				>
					<button
						type="submit"
						className="self-start rounded-md border border-solid border-gray-300 bg-indigo-600 px-3 py-2 text-base"
					>
						Connexion avec Battlenet
					</button>
				</form>
			</div>
			<div className="flex items-center justify-center p-8 md:m-auto md:w-3/5">
				<Image
					src="/hero-desktop.png"
					width={1000}
					height={760}
					alt="Screenshots de l'outil en version desktop"
					className="hidden rounded lg:block"
				/>
				<Image
					src="/hero-mobile.png"
					width={560}
					height={620}
					alt="Screenshots de l'outil en version mobile"
					className="block rounded lg:hidden"
				/>
			</div>
		</>
	);
}
