import { useLocation } from "react-router-dom";
import * as S from "./NavMenu.styles";
import { Image } from "@chakra-ui/react";

export const NavMenu = () => {
  const location = useLocation();
  const path = location.pathname;

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
    <S.MenuContainer>
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
