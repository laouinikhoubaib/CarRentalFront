import {ComplaintType} from './ComplaintType.enum';
import {ComplaintStatus} from './ComplaintStatus.enum';


export class Complaint {


    Complaint_id!: number;
    description!: string;
    ComplaintDate!: Date;
    Etat: boolean = false;
    complaintType!: ComplaintType;
    complaintStatus!: ComplaintStatus;

}
