import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, // Infinite stale time
      gcTime: Infinity, 
      retry: 3,
      refetchOnWindowFocus: false,
    },
  },
}); 