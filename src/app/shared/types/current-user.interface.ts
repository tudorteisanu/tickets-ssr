export interface CurrentUserInterface {
  id?: number;
  email: string;
  createdAt?: string;
  updatedAt?: string;
  firstName: string;
  lastName: string | null;
  avatar: string | null;
  token: string;
}
