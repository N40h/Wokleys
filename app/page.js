import { redirect } from 'next/navigation';
import { auth } from './lib/auth';
import Hero from './ui/Hero';

export default async function Home() {
	const session = await auth();

	if (session) {
		redirect('/dashboard');
	}

	return (
		<section className="flex flex-col justify-center p-6 md:flex-row lg:justify-start">
			<Hero />
		</section>
	);
}
