export type Users = {
    [key: string]: string | number;
}

export type User = {
    [key: string]: string | number | boolean;
}

export type GithubContextProps = {
    users: Users[];
    user: User;
    loading: boolean;
    searchUsers: (text: string) => Promise<void>;
    getUser: (login: string) => Promise<void>;
    clearUsers: () => void;
}

export type Alert = {
    msg: string;
    type: string;
}

export type AlertReducer = Alert | null;

export type AlertContextProps = {
    alert: AlertReducer;
    setAlert: (msg: string, type: string) => void;
}