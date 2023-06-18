import {http} from "../common";
import {SaveNotificationRequest, SaveNotificationResponse} from "./types";

class NotificationService {
    save_calculation(data: SaveNotificationRequest) {
        return http.post<SaveNotificationResponse>("/notification/subscribers", JSON.stringify(data))
    }
}
export default new NotificationService();