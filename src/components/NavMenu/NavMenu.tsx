import { useLocation } from "react-router-dom";
import * as S from "./NavMenu.styles";
import { Image as ChakraImage } from "@chakra-ui/react";
import { useEffect } from "react";
import { useTelegram } from "../../hooks/useTelegram";

export const NavMenu = () => {
  const iconNames = ["home", "tickets", "buy", "profile"];
  const { tg } = useTelegram();
  useEffect(() => console.log(tg?.platform), [tg?.platform]);
  const isIOS = tg?.platform === "ios";

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
      link: "/refs",
      title: "Рефералы",
      name: "people",
    },
    {
      link: "/docs",
      title: "Документы",
      name: "docs",
    },
  ];

  const isSelected = (link: string) => {
    if (link === "/") {
      return path === "/";
    }

    return path.startsWith(link);
  };

  return (
    <S.MenuContainer isIOS={isIOS}>
      {links.map((item) => {
        const selected = isSelected(item.link);

        return (
          <S.LinkButton key={item.link} to={item.link} selected={selected}>
            <ChakraImage
              src={`/icons/nav/${item.name}${selected ? "_selected" : ""}.svg`}
              width="24px"
            />
            {item.title}
          </S.LinkButton>
        );
      })}
    </S.MenuContainer>
  );
};
