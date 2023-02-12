import { ReactElement, createContext, useEffect, useState } from 'react';

import { BASE_URL } from '../utils/baseUrl';
import axios from 'axios';

export interface IAuthContext {
  currentUser: null | ICurrentUser;
  setCurrentUser: React.Dispatch<React.SetStateAction<ICurrentUser | null>>;
  login(inputs: ILoginInputs): Promise<void>;
  getUser(): Promise<void>;
}

export interface ICurrentUser {
  id: string;
  name: string;
  email: string;
  profilePic: string;
  provider: string;
  createdAt: Date;
  role: string;
  profile: {
    bio: string;
    backgroundImg: string;
  };
  followers: { followerId: string }[];
  following: { followedId: string }[];
}

interface ILoginInputs {
  [key: string]: string;
}

interface IProps {
  children: ReactElement;
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

export function AuthContextProvider({ children }: IProps): ReactElement {
  const [currentUser, setCurrentUser] = useState<null | ICurrentUser>(null);

  useEffect(() => {
    if (!currentUser) {
      getUser();
    }
  }, [currentUser]);

  async function login(inputs: ILoginInputs) {
    const res = await axios.post(BASE_URL + '/api/auth/login', inputs, {
      withCredentials: true,
    });

    setCurrentUser(res.data);
  }

  async function getUser() {
    try {
      const user = await axios.get(BASE_URL + '/api/users/find');
      setCurrentUser(user.data);
    } catch (error) {
      console.log('error', error);
    }
  }

  const value = {
    currentUser,
    setCurrentUser,
    login,
    getUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
