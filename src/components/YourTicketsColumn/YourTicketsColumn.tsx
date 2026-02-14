import { HStack, Skeleton, VStack } from "@chakra-ui/react";
import type { TicketsList } from "../../api/types";
import * as S from "./YourTicketsColumn.styles";
import { useRef, useState } from "react";

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
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      setIsScrolled(scrollRef.current.scrollTop > 0);
    }
  };

  return (
    <>
      {isLoading ? (
        <Skeleton
          w={"60%"}
          variant="shine"
          height={"34px"}
          opacity={"0.3"}
          borderRadius={"16px"}
          marginRight={'auto'}
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
      <VStack
        ref={scrollRef}
        gap={"8px"}
        w={"calc(100% + 40px)"}
        padding={"0 20px 20px 20px"}
        align={"start"}
        maxHeight={"calc(100vh - 370px)"}
        onScroll={handleScroll}
        overflow={"auto"}
        boxShadow={
          isScrolled
            ? "inset 0px 10px 20px -10px rgba(31, 38, 61, 0.5)"
            : "none"
        }
        transition="box-shadow 0.2s"
      >
        {isLoading
          ? Array.from({ length: 50 }).map((_, index) => {
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
    </>
  );
};
