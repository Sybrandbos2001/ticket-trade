export interface Concert {
  id: number;
  name: string;
  description: string;
  startDateTime: Date;
  endDateTime: Date;
  location: string;
  artist: string;
  price: number;
  amountTickets: number;
}
