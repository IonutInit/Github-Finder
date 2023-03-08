export type Users = {
    [key: string]: string | number;
}

export type GithubContextProps = {
    users: Users[];
    loading: boolean;
    searchUsers: (text: string) => Promise<void>;
    clearUsers: () => void;
}
