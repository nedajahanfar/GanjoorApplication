import { NavigationContainer } from '@react-navigation/native';
import Layout from './_layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Layout />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
