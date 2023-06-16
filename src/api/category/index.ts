import http from "../common";
import {CategoryList} from "./types";

class CategoryService {
    get_category_list() {
        return http.get<CategoryList>("/category/list")
    }
}
export default new CategoryService();