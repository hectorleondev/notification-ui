import http from "../common";
import {SaveNotification} from "./types";

class NotificationService {
    save_calculation(body: any) {
        console.log(body);
        return http.post<SaveNotification>("notification", body)
    }
}
export default new NotificationService();