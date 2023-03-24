
import {TypeAgence} from './typeagence';
import {User} from './user.model';


export class Agence{

    agenceId!: number;
    numero!: string;
    nom!: string;
    typeagence!: TypeAgence;
    user: User;
}
