import axios from "axios";

export const http = axios.create({
    baseURL: "https://7hbsmqn32h.execute-api.us-east-1.amazonaws.com/",
    headers: {
        "Content-Type": "application/json"
    }
});
