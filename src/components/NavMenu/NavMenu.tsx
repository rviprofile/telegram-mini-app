import { useLocation } from "react-router-dom";
import * as S from "./NavMenu.styles";
import { Image as ChakraImage } from "@chakra-ui/react";
import { useEffect } from "react";

export const NavMenu = () => {
  const iconNames = ["home", "tickets", "buy", "profile"];

  // создаем объект с Image для каждой иконки
  const icons: Record<string, string> = {};

  useEffect(() => {
    iconNames.forEach((name) => {
      const normal = new Image();
      normal.src = `/icons/nav/${name}.svg`;
      const selected = new Image();
      selected.src = `/icons/nav/${name}_selected.svg`;
      icons[name] = `/icons/nav/${name}.svg`;
    });
  });
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
            <ChakraImage
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
