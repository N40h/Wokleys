import Image from 'next/image';
import Characters from './Characters';

const links = [
	{
		name: 'Personnage1',
		avatar: '/avatar.jpg',
	},
	{
		name: 'Personnage2',
		avatar: '/avatar.jpg',
	},
	{
		name: 'Personnage3',
		avatar: '/avatar.jpg',
	},
	{
		name: 'Personnage4',
		avatar: '/avatar.jpg',
	},
	{
		name: 'Personnage5',
		avatar: '/avatar.jpg',
	},
];

export default function NavLinks() {
	return (
		<>
			<Characters />
			{links.map((link) => {
				const avatar = link.avatar;
				return (
					<div
						key={link.name}
						className="flex h-9 grow cursor-pointer items-center justify-center gap-1 rounded-md bg-indigo-600 p-3 text-sm md:flex-none"
					>
						<Image
							src={avatar}
							alt="Avatar du personnage"
							width={25}
							height={25}
							className="rounded-full"
						/>
						<p>{link.name}</p>
					</div>
				);
			})}
		</>
	);
}
