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
      return queryFn(pageParam as TParams);
    },
    initialPageParam: initialParams,

    getNextPageParam: (lastPage, _pages, lastPageParam) => {
      if (!lastPage?.meta?.hasNextPage) return undefined;

      return {
        ...(lastPageParam as TParams),
        page: lastPage.meta.page + 1,
      };
    },

    enabled,
    staleTime,
    gcTime: cacheTime,
  });

  const flatData = useMemo(
    () => infiniteQuery.data?.pages.flatMap(page => page.data ?? []) ?? [],
    [infiniteQuery.data]
  );

  const lastMeta = infiniteQuery.data?.pages.at(-1)?.meta;

  const hasNextPage = !!lastMeta?.hasNextPage;
  const totalCount = lastMeta?.itemCount ?? 0;

  const handleLoadMore = useCallback(() => {
    if (hasNextPage && !infiniteQuery.isFetchingNextPage) {
      infiniteQuery.fetchNextPage();
    }
  }, [hasNextPage, infiniteQuery]);

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
