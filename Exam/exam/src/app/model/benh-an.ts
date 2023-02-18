import {Patient} from "./patient";
import {Doctor} from "./doctor";

export interface BenhAn {
  id?: string;
  patient?: Patient;
  startDay?: string;
  endDay?: string;
  reason?: string;
  method?: string;
  doctor?: Doctor;
}
