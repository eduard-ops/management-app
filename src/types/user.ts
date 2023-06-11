import { UserI, subordinatesI } from "../interfaces/user";

type ResponseGetUsers = UserI | UserI[] | subordinatesI[] | null | undefined;

type ResponseUpdateBoss = UserI | null | undefined;

export type { ResponseGetUsers, ResponseUpdateBoss };
