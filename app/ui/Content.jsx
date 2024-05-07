'use client';
import { Provider } from 'react-redux';
import { store } from '../lib/store';
import Affixes from '../ui/Affixes';
import CharactersInfos from '../ui/CharactersInfos';
import NavLinks from '../ui/NavLinks';

export default function Content({ affixes, characters }) {
	return (
		<Provider store={store}>
			<div className="m-5 flex h-screen flex-col md:flex-row md:overflow-hidden">
				<div className="w-full flex-none md:w-64">
					<div className="flex flex-col p-3 md:px-2">
						<div className="flex grow flex-row flex-wrap justify-between gap-2 md:flex-col md:flex-nowrap md:justify-normal md:space-x-0 md:space-y-2">
							<Affixes affixes={affixes} />
							<NavLinks characters={characters} />
						</div>
					</div>
				</div>
				<div className="grow p-6 md:overflow-y-auto md:p-12">
					<CharactersInfos characters={characters} />
				</div>
			</div>
		</Provider>
	);
}
