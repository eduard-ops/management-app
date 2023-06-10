import { UserI, subordinatesI } from "../interfaces/user";

type ResponseGetUsers = UserI | UserI[] | subordinatesI[] | null | undefined;

export type { ResponseGetUsers };
