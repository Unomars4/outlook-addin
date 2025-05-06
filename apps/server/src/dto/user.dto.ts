export class ContactUser {
  id: string;
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
  id: string;
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
