// @flow

export type CircleDataType = {
  id: string,
  name: string,
  users: string[],
  entries: string[],
  totalValue: number,
  userValues: any,
};

class CircleType {
  id: string;
  name: string;
  users: string[];
  entries: string[];
  totalValue: number = 0;
  userValues: any;

  constructor(circleData: CircleDataType) {
    this.id = circleData.id;
    this.name = circleData.name;
    this.users = circleData.users;
    this.totalValue = circleData.totalValue;
    this.userValues = circleData.userValues;
  }
}

export default CircleType;
