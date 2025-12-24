import type { PaginationRequest, PaginationResponse } from '@/types/api';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useCallback, useMemo } from 'react';

export type UseInfinitePaginationOptions<
  TData,
  TParams extends PaginationRequest
> = {
  queryKey: unknown[];
  queryFn: (params: TParams) => Promise<PaginationResponse<TData>>;
  initialParams: TParams;
  enabled?: boolean;
  staleTime?: number;
  cacheTime?: number;
};

export const useInfinitePagination = <
  TData,
  TParams extends PaginationRequest = PaginationRequest
>(
  options: UseInfinitePaginationOptions<TData, TParams>
) => {
  const {
    queryKey,
    queryFn,
    initialParams,
    enabled = true,
    staleTime,
    cacheTime,
  } = options;

  const infiniteQuery = useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam }) => {
      const params = (pageParam ?? initialParams) as TParams;
      return queryFn(params);
    },
    initialPageParam: initialParams,
    getNextPageParam: lastPage => {
      if (lastPage?.meta?.hasNextPage) {
        return {
          ...initialParams,
          lastestID: lastPage.meta?.page + 1,
        } as TParams;
      }
      return undefined;
    },
    enabled,
    staleTime,
    gcTime: cacheTime,
  });

  const flatData = useMemo(
    () =>
      infiniteQuery.data?.pages?.flatMap(
        (page: PaginationResponse<TData>) => page.data || []
      ) || [],
    [infiniteQuery.data]
  );

  const hasNextPage = useMemo(
    () =>
      !!infiniteQuery.data?.pages?.[infiniteQuery.data.pages.length - 1]?.meta
        ?.hasNextPage,
    [infiniteQuery.data]
  );

  const totalCount = useMemo(
    () =>
      infiniteQuery.data?.pages?.[infiniteQuery.data.pages.length - 1]?.meta
        ?.itemCount || 0,
    [infiniteQuery.data]
  );

  const handleLoadMore = useCallback(() => {
    if (!infiniteQuery.isFetchingNextPage && hasNextPage) {
      infiniteQuery.fetchNextPage();
    }
  }, [infiniteQuery, hasNextPage]);

  return {
    ...infiniteQuery,
    data: flatData,
    hasNextPage,
    totalCount,
    handleLoadMore,
    isLoadingFirstPage: infiniteQuery.isLoading,
    isFetchingNextPage: infiniteQuery.isFetchingNextPage,
    isEmpty: flatData.length === 0 && !infiniteQuery.isLoading,
  };
};
