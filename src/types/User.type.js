//@flow

export type UserDataType = {
  id: string,
  name: string,
  email: string,
  avatarUrl: string,
  color: string,
  memberOf: string[],
  validSince: number,
  lastLoginAt: number,
  createdAt: number,
};

class UserType {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  color: string = '#689F38';
  memberOf: string[] = [];
  validSince: number;
  lastLoginAt: number;
  createdAt: number;

  constructor(uD: UserDataType) {
    this.id = uD.id;
    this.name = uD.name;
    this.email = uD.email;
    this.avatarUrl = uD.avatarUrl;
    this.color = uD.color ? uD.color : this.color;
    this.memberOf = uD.memberOf ? [...uD.memberOf] : this.memberOf;
    this.validSince = uD.validSince;
    this.lastLoginAt = uD.lastLoginAt;
    this.createdAt = uD.createdAt;
  }
}

export default UserType;
