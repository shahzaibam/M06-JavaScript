export class User {
  // Assuming id and email are other properties you might have
  id?: number; // Optional property
  email?: string; // Optional property
  username: string;
  userpass: string; // Assuming you have a userpass property as well

  constructor(username: string, userpass: string) {
    this.username = username;
    this.userpass = userpass;
  }
}
