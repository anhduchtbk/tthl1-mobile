interface Meta {
  page: number;
  limit: number;
  itemCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export type PaginationResponse<T> = {
  data: T[];
  meta: Meta;
};

export type PaginationRequest = {
  limit?: number;
  lastestID?: string;
  [key: string]: any;
};
