export interface LogList {
    categories: Log[]
}
export interface Log {
    log_id: string,
    user_id: string,
    user_name: string,
    email: string,
    phone_number: string,
    category: string,
    channel: string,
    message: string,
    create_at: string
}
