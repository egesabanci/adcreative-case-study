import { QueryClientProvider, QueryClient } from 'react-query';

import Main from './pages/Main';

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<Main />
		</QueryClientProvider>
	);
}

export default App;
