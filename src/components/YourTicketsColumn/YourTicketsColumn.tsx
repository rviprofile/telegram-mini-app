import { Button, HStack, Skeleton, VStack } from "@chakra-ui/react";
import type { TicketsList } from "../../api/types";
import * as S from "./YourTicketsColumn.styles";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LinkToChannelCard } from "../LinkToChannelCard/LinkToChannelCard";

const Filter = {
  All: "all",
  Buy: "buy",
  Refs: "refs",
} as const;

type Filter = (typeof Filter)[keyof typeof Filter];

export const YourTicketsColumn = ({
  tickets,
  isLoading,
}: {
  tickets?: TicketsList;
  isLoading: boolean;
}) => {
  const [selectedFilter, setSelectedFilter] = useState<Filter>(Filter.All);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleScroll = () => {
    if (scrollRef.current) {
      setIsScrolled(scrollRef.current.scrollTop > 0);
    }
  };

  if (!isLoading && !tickets) {
    return (
      <S.CardContainer>
        <h2>У вас пока нет билетов</h2>
        <HStack maxW={"100%"} gap={"8px"}>
          <Button
            size={"xl"}
            borderRadius={8}
            color={"black"}
            bg={"#BDF35D"}
            h={"42px"}
            w={"calc(50% - 4px)"}
            padding={"9px 16px"}
            onClick={() => navigate("/buy")}
          >
            Купить билет
          </Button>
          <Button
            size={"xl"}
            borderRadius={8}
            color={"white"}
            bg={"#F74A78"}
            h={"42px"}
            w={"calc(50% - 4px)"}
            padding={"9px 16px"}
            onClick={() => {
              navigator.share({
                title: `Розыгрыш автомобиля!`,
                text: "Покупай билеты, учавствуй в розыгрыше, следи за результатами",
                url: "https://t.me/VoshodLotteryBot?startapp=ref_777",
              });
            }}
          >
            Пригласить друга
          </Button>
        </HStack>
      </S.CardContainer>
    );
  }

  return (
    <>
      {isLoading ? (
        <Skeleton
          w={"60%"}
          variant="shine"
          height={"34px"}
          opacity={"0.3"}
          borderRadius={"16px"}
          marginRight={"auto"}
        />
      ) : (
        <HStack gap={"8px"} justify={"start"} width={"100%"}>
          <S.FilterTab
            selected={selectedFilter === Filter.All}
            onClick={() => setSelectedFilter(Filter.All)}
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
            selected={selectedFilter === Filter.Buy}
            onClick={() => setSelectedFilter(Filter.Buy)}
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
            selected={selectedFilter === Filter.Refs}
            onClick={() => setSelectedFilter(Filter.Refs)}
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
        marginBottom={"104px"}
        align={"start"}
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
        <LinkToChannelCard />
      </VStack>
    </>
  );
};
