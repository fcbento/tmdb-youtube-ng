import { ResultData } from "src/app/core/models/result-data.model";

export interface ResponseData {
    page: number;
    results: ResultData[];
    totalPages: number;
    totalResults: number;
}