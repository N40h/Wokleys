import './globals.css';
import { robotoMono } from './lib/fonts';
import Header from './ui/Header';

export const metadata = {
	title: 'Bienvenue sur Wokleys',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
	return (
		<html lang="fr">
			<body
				className={`${robotoMono.className} m-auto box-border bg-zinc-950 text-neutral-100 antialiased`}
			>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
