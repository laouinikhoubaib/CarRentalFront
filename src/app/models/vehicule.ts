import {Alimentation} from './alimentation';


export class Vehicule {
  vehiculeId!: any;
  matricule!: string;
  nbrplaces!: string;
  couleur!: string;
  longueur!: string;
  largeur!: string;
  puissance!: string;
  chargeutile!: string;
  description!: string;
  dateajout!: any;
  picture!: any;
  jourslocation!: any;
  [key: string]: any;
  alimentation!: Alimentation;
}
