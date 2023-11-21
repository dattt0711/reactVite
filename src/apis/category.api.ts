import http from "../utils/http";

const URL = 'categories';
import { SuccessResponse } from '../types/utils.type';
import { Category } from '../types/category.type';
const categoryApi = {
    getCategories() {
        return http.get<SuccessResponse<Category[]>>(URL);
    }
}

export default categoryApi;