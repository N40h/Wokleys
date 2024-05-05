import Affixes from './Affixes';
import NavLinks from './NavLinks';

export default function SideNav() {
	return (
		<div className="flex flex-col p-3 md:px-2">
			<div className="flex grow flex-row flex-wrap justify-between gap-2 md:flex-col md:justify-normal md:space-x-0 md:space-y-2">
				<Affixes />
				<NavLinks />
			</div>
		</div>
	);
}
