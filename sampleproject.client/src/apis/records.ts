import { dataService } from "../services/dataService";
import type { PaginationRequest } from '../types/request';

export const getRecords = (pagination?: PaginationRequest) => {
    return dataService.get("/records", pagination)
}

export const getRecordById = (id: string) => {
    return dataService.get(`/records/${id}`);
}