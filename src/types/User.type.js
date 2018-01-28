//@flow

export type UserDataType = {
  id: string,
  name: string,
  color: string,
  memberOf: string[],
};

class UserType {
  id: string;
  name: string;
  color: string;
  memberOf: string[];
  absoluteValue: number = 0;
  relativeValue: number = 0;

  constructor(userDataType: UserDataType) {
    this.id = userDataType.id;
    this.name = userDataType.name;
    this.color = userDataType.color;
    this.memberOf = [...userDataType.memberOf];
  }
}

export default UserType;
