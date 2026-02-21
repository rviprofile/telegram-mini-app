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
export type LotteryStatus =
  | "await" // Ожидает запуска
  | "in_progress" // В процесс розыгрыша
  | "result_await" // В процесс подведения результатов
  | "finished" // Результаты подведены, розыгрыш закончен
  | "unknown"; // Статус неизвестен

export type LotteryProgress = {
  id: string | number;
  carId: string | number;
  startDate: string;
  finishDate: string;
  cutOffDate: string;
  status: LotteryStatus;
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

export type DocsList = {
  id: number;
  code: string;
  title: string;
}[];
