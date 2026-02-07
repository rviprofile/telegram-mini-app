export type Car = {
  id: string | number;
  model: string;
  brand: string;
  image: string;
};

export type CarDetail = {
  id: string | number;
  model: string;
  brand: string;
  description: string;
  mainImage: string;
  images: string[];
  props: {
    code: string;
    ico: string;
    name: string;
    value: string;
  }[];
};

export type LotteryProgress = {
  id: string | number;
  carId: string | number;
  startDate: string;
  finishDate: string;
  cutOffDate: string;
  status: string;
  ticketsTarget: number;
  ticketsCount: number;
  ticketsLeft: number;
  membersCount: number;
};

export type Ticket = {
  id: string | number;
  carId: string | number;
  purchaseDate: string;
  ticketPrice: number;
  ticketCount: number;
  priceTotal: number;
};

export type TicketsList = Ticket[];
