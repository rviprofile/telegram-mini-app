import { useLocation } from "react-router-dom";
import * as S from "./NavMenu.styles";
import { Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const NavMenu = () => {
  const location = useLocation();
  const path = location.pathname;

  const [bottom, setBottom] = useState(0);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (!tg) return;

    const insets = tg.safeAreaInset;
    setBottom(insets.bottom);
  }, []);

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
