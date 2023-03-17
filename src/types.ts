type Fetch = {
  [key: string]: string | number;
};

type FetchWithBoolean = {
  [key: string]: string | number | boolean;
};

export type Users = Fetch;
export type Repo = Fetch;
export type User = FetchWithBoolean;

export type Repos = Repo[];

export type GithubContextProps = {
  users: Users[];
  user: User;
  loading: boolean;
  repos: Repo[];
  searchUsers: (text: string) => Promise<void>;
  getUser: (login: string) => Promise<void>;
  clearUsers: () => void;
  getUserRepos: (login: string) => Promise<void>;
};

export type GithubReducer = {
  users: Users[];
  // eslint-disable-next-line @typescript-eslint/ban-types
  user: {};
  repos: Repos;
  loading: boolean;
};

export type Alert = {
  msg: string;
  type: string;
};

export type AlertReducer = Alert | null;

export type AlertContextProps = {
  alert: AlertReducer;
  setAlert: (msg: string, type: string) => void;
};
