export interface BaseApiResponse<T> {
  data: T;
  success: boolean;
  messages: string[];
  currentPageIndex?: number;
  currentPageCount?: number;
  totalCount?: number;
}
