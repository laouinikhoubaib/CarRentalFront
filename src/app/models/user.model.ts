import {Role} from "./role.enum";

export class User {
    userId!: number;
    username!: string;
    password: string = "";
    name: string = "";
    role!: Role;
    phoneNumber!: string;
    email!: string;
    loginAttempts: number = 0;
    locked: boolean = false;
    accessToken!: string;
    refreshToken!: string;
    nbCasesSolved!: number;
    nbEventsCreated!: number;



}
