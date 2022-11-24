import { Location } from "./location.model";

export interface Concert {
  id: string;
  name: string;
  description: string;
  startDateTime: Date;
  endDateTime: Date;
  location?: Location;
  locationId: string;
  artist: string;
  price: number;
  amountTickets: number;
}
