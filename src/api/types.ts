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
  id: number | string;
  purchaseDate: string; // 2026-02-20T02:22:44+00:00
  ticketPrice: number;
  ticketCount: number;
  priceTotal: number;
  source: "referal" | "buy";
};

export type TicketsList = Ticket[];

export type DocsList = {
  id: number;
  code: string;
  title: string;
}[];

export type DocDetail = {
  id: 47;
  code: string;
  title: string;
  text: string;
};

export type Referal = {
  id: number | string;
  firstName: string;
  lastName: string;
  avatar: string;
  status: "active" | "invited";
};

export type ReferalList = Referal[];

export type ReferalStats = {
  referalTicketCount: number;
  userCount: number;
  collectedToNext: number;
  targetToNext: number;
};

export type User = {
  avatar: string;
  firstName: string;
  lastName: string;
  nickName: string;
  referalCode: string;
};

export type CreatePaymentResult = {
  success: boolean;
  url: string;
  id: string | number;
};

export type TransactionById = {
  id: string | number;
  createDate: string;
  completeDate: string | null;
  status: "create" | string;
  price: number;
};
