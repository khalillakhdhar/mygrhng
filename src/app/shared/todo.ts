import { User } from "./user";

//todo(id,titre,dateheure,etat,responsable)
export class Todo {
    titre!: string;
    dateheure!: string;
    etat!: string;
    responsable!: User;
}
