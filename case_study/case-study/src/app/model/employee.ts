import {Education} from "./education";
import {Division} from "./division";

export interface Employee {
  id?: number;
  name?: string;
  dateOfBirth?: string;
  iDCard?: string;
  salary?: string;
  phoneNumber?: string;
  email?: string;
  address?: string;
  position?: Position;
  education?: Education;
  division?: Division;
}
