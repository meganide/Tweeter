import { createContext, ReactElement, useState } from 'react';
import axios from 'axios';

export interface IAuthContext {
  currentUser: null | ICurrentUser;
  setCurrentUser: React.Dispatch<React.SetStateAction<ICurrentUser | null>>;
  login(inputs: ILoginInputs): Promise<void>;
}

interface ICurrentUser {
  id: string;
  name: string;
  email: string;
  profilePic: string | null;
  provider: string;
  createdAt: Date;
  role: string;
  profile: {
    bio: string | null;
    backgroundImg: string | null;
  } | null;
}

interface ILoginInputs {
  name?: string;
  email: string;
  password: string;
}

interface iProps {
  children: ReactElement;
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

export function AuthContextProvider({ children }: iProps): ReactElement {
  const [currentUser, setCurrentUser] = useState<null | ICurrentUser>(null);

  async function login(inputs: ILoginInputs) {
    const res = await axios.post('http://localhost:8000/api/auth/login', inputs, {
      withCredentials: true,
    });

    setCurrentUser(res.data);
  }

  const value = {
    currentUser,
    setCurrentUser,
    login,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
