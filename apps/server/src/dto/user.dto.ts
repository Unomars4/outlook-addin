export class ContactUser {
  id: number;
  firstName: string;
  lastName: string;
  title: string;
  department: string;
  phoneNumber: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export class UserResponse {
  id: number;
  firstName: string;
  lastName: string;
  title: string;
  department: string;
  phoneNumber: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  contacts?: ContactUser[];
}
