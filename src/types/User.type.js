//@flow

export type UserDataType = {
  id: string,
  name: string,
  avatarUrl: string,
  color: string,
  memberOf: string[],
};

class UserType {
  id: string;
  name: string;
  avatarUrl: string;
  color: string;
  memberOf: string[];

  constructor(userData: UserDataType) {
    this.id = userData.id;
    this.name = userData.name;
    this.avatarUrl = userData.avatarUrl;
    this.color = userData.color;
    this.memberOf = [...userData.memberOf];
  }
}

export default UserType;
