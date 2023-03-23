import {NomAgence} from './nomagence';
import {TypeAgence} from './typeagence';
import {User} from './user.model';


export class Agence{

    agenceId!: number;
    phoneNumber!: string;
    nomagence!: NomAgence;
    typeagence!: TypeAgence;
    user: User;
}
