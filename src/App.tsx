import { QueryClientProvider, QueryClient } from 'react-query';

import Multiselect from './components/Multiselect';

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<div className='w-screen h-screen bg-[#151515] flex items-center justify-center overflow-x-hidden'>
				<Multiselect />
			</div>
		</QueryClientProvider>
	);
}

export default App;
