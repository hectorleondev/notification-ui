import {http} from "../common";
import {LogList} from "./types";

class LogService {
    get_log_list() {
        return http.get<LogList>("/log/list")
    }
}
export default new LogService();