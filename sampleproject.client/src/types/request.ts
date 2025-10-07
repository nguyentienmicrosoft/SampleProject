export type PaginationRequest = {
    pageNumber: number;
    pageSize: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
};


export type AppResponse<T> = {
    data: T;
    message: string;
    isSuccess: boolean;
    errors: string[];
};


export type PagedResult<T> = {
    items: T[];
    totalCount: number;
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    hasNext: boolean;
    hasPrevious: boolean;
};