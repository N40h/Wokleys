import { robotoMono } from './lib/fonts';
import Header from './ui/Header';
import './ui/globals.css';

export const metadata = {
	title: 'Create Next App',
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
