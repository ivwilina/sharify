interface AuthService {
  signIn(username: string, password: string): Promise<AuthOutput>;
  signOut(): Promise<void>;
  signUp(username: string, password: string, displayName: string): Promise<AuthOutput>;
  changePassword(_id: string, oldPassword: string, newPassword: string): Promise<AuthOutput>;
}

/* -------------------------------------------------------------------------- */

type AuthOutput = {
  code   : number,
  message: string,
}

/* -------------------------------------------------------------------------- */

export {
  AuthService as default,
  AuthOutput,
}