import axios from "axios";

export default axios.create({
    baseURL: "https://7hbsmqn32h.execute-api.us-east-1.amazonaws.com/",
    headers: {
        "Content-type": "application/json"
    }
});