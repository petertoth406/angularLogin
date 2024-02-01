export class User {
    private username!: string;
    public get Username(): string {
        return this.username;
    }
    public set Username(value: string) {
        this.username = value;
    }

    private password!: string;
    public get Password(): string {
        return this.password;
    }
    public set Password(value: string) {
        this.password = value;
    }

    private _loggedIn!: boolean;
    public login(): void {
        this._loggedIn = true;
    }
    public logOut(): void {
        this._loggedIn = false;
    }

    constructor(username: string = "", password: string = "") {
        this.username = username;
        this.password = password;
    }
  }