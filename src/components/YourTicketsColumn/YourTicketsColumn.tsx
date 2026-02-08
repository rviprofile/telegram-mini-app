import { HStack, Skeleton, VStack } from "@chakra-ui/react";
import type { TicketsList } from "../../api/types";
import * as S from "./YourTicketsColumn.styles";
import { useState } from "react";

export const YourTicketsColumn = ({
  tickets,
  isLoading,
}: {
  tickets?: TicketsList;
  isLoading: boolean;
}) => {
  const [selectedFilter, setSelectedFilter] = useState<"all" | "buy" | "refs">(
    "all",
  );

  return (
    <VStack gap={"8px"} w={"100%"} align={"start"}>
      {isLoading ? (
        <Skeleton
          w={"60%"}
          variant="shine"
          height={"34px"}
          opacity={"0.3"}
          borderRadius={"16px"}
        />
      ) : (
        <HStack gap={"8px"} justify={"start"} width={"100%"}>
          <S.FilterTab
            selected={selectedFilter === "all"}
            onClick={() => setSelectedFilter("all")}
          >
            Все
          </S.FilterTab>
          <p
            style={{
              paddingBottom: "10px",
            }}
          >
            /
          </p>
          <S.FilterTab
            selected={selectedFilter === "buy"}
            onClick={() => setSelectedFilter("buy")}
          >
            Покупки
          </S.FilterTab>
          <p
            style={{
              paddingBottom: "10px",
            }}
          >
            /
          </p>
          <S.FilterTab
            selected={selectedFilter === "refs"}
            onClick={() => setSelectedFilter("refs")}
          >
            Рефералы
          </S.FilterTab>
        </HStack>
      )}
      {isLoading
        ? Array.from({ length: 4 }).map((_, index) => {
            return (
              <Skeleton
                key={index}
                width={"100%"}
                height={"64px"}
                borderRadius={"16px"}
                variant="shine"
                opacity={"0.3"}
              />
            );
          })
        : tickets?.map((ticket) => {
            return (
              <S.Tiket>
                <div className="title">ID: {ticket.id}</div>
                <div className="date">
                  <p>{ticket.purchaseDate.split(" ")[0]}</p>
                  <p>{ticket.purchaseDate.split(" ")[1]}</p>
                </div>
              </S.Tiket>
            );
          })}
    </VStack>
  );
};
