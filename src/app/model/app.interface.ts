export interface App {
    token?: string;
    currentUser?: User;
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    role: string;
}