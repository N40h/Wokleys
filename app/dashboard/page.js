import { redirect } from 'next/navigation';
import { auth } from '../lib/auth';

export default async function Page() {
	const session = await auth();

	console.log(session);
	if (!session) {
		redirect('/');
	}

	if (session) {
		return <div>Dashboard Page</div>;
	}
}
