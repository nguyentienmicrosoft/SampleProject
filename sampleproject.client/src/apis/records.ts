import { dataService } from "../services/dataService";
import { type AppResponse, type PagedResult, type PaginationRequest } from '../types/request';
import { type Record } from '../types/records';

export const getRecords = (pagination?: PaginationRequest) => {
    return dataService.get<AppResponse<PagedResult<Record>>>("/records", pagination)
}

export const getRecordById = (id: string) => {
    return dataService.get<AppResponse<Record>>(`/records/${id}`);
}