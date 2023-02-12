import {FacilityType} from "./facility-type";
import {RentType} from "./rent-type";

export interface Facility {
  id: number,
  name?: string,
  image?: string
  area?: string,
  cost?: string,
  maxPeople?: number,
  standard?: string,
  description?: string,
  poolArea?: string,
  floor?: number,
  facilityFree?: string,
  rentType?: RentType,
  facilityType?: FacilityType
}
