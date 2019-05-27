export class UserModel {
  displayName: string;
  email: string;
  roles: Array<string>;

  constructor(options: UserModel) {
    Object.assign(options, this);
  }
}
