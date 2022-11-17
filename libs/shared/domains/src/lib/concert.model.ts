export interface Concert {
  id: number;
  name: string;
  description: string;
  startDateTime: Date;
  endDateTime: Date;
  amountTickets: number;
  location: string;
  artist: string;
}
