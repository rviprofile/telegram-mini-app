import { useLocation } from "react-router-dom";
import * as S from "./NavMenu.styles";
import { Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTelegram } from "../../../hooks/useTelegram";

export const NavMenu = () => {
  const location = useLocation();
  const path = location.pathname;

  const [bottom, setBottom] = useState(0);

  const tg = useTelegram();

  useEffect(() => {
    if (!tg) return;

    // Попробуем безопасную зону из SDK
    const insets = tg?.WebApp?.getSafeAreaInsets?.() ||
      tg?.WebApp?.safeAreaInsets || {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      };

    setBottom(insets.bottom);
  }, [tg]);

  const links = [
    {
      link: "/",
      title: "Главная",
      name: "home",
    },

    {
      link: "/tickets",
      title: "Билеты",
      name: "tickets",
    },

    {
      link: "/buy",
      title: "Купить",
      name: "buy",
    },

    {
      link: "/profile",
      title: "Профиль",
      name: "profile",
    },
  ];

  return (
    <S.MenuContainer bottom={bottom}>
      {links.map((item) => {
        return (
          <S.LinkButton to={item.link} selected={path === item.link}>
            <Image
              src={`/icons/nav/${item.name}${
                path === item.link ? "_selected" : ""
              }.svg`}
            />
            {item.title}
          </S.LinkButton>
        );
      })}
    </S.MenuContainer>
  );
};
