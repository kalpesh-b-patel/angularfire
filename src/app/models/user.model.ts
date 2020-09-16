export interface UserModel {
  uid: string;
  displayName: string;
  email: string;
  photoURL?: string;
  emailVerified?: boolean;
}
