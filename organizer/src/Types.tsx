export type Event = {
  id?: string,
  organizer: string;
  address: string;
  title: string;
  startDateTime: string;
  endDateTime: string;
  description: string;
  mustRegister: boolean;
  price: number;
  type: string;
  url: string;
};

export type Entry = {
    id?: string,
    name: string,
    address: string,
    date: string,
    startTime: string,
    endTime: string,
    tags: string,
    registration: string,
    fees: number,
    description: string,
    url: string
}