import { QueryClient, QueryClientProvider } from 'react-query';
import { Uploader } from './components/Uploader';
import { List } from './components/List';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <List />
    </QueryClientProvider>
  );
}

export default App;
