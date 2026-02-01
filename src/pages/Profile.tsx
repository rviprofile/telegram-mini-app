import { Box, VStack, Text } from "@chakra-ui/react";
import { NavMenu } from "../components/NavMenu/NavMenu";
import { useTelegram } from "../hooks/useTelegram";
import { useAuth } from "../components/AuthProvider";

export const Profile = () => {
  const tg = useTelegram();

  const auth = useAuth();

  return (
    <VStack minH={"100vh"}>
      <Text fontSize="xl">Профиль пользователя</Text>

      {!tg ? (
        <Text>Загрузка данных Telegram...</Text>
      ) : (
        <Box>
          <Text>
            <b>ID:</b> {tg.tgWebAppData.user.id}
          </Text>
          <Text>
            <b>Имя:</b> {tg.tgWebAppData.user.first_name}
          </Text>
          <Text>
            <b>Фамилия:</b> {tg.tgWebAppData.user.last_name}
          </Text>
          <Text>
            <b>Username:</b> {tg.tgWebAppData.user.username}
          </Text>
          <Text>
            <b>Язык:</b> {tg.tgWebAppData.user.language_code}
          </Text>
          <Text>
            <b>initData:</b> {tg.initData ? "Существует" : "Не найдено"}
          </Text>
          <Text>
            <b>Токены:</b> {auth.tokens ? "Получены" : "Не получены"}
          </Text>
        </Box>
      )}

      <NavMenu />
    </VStack>
  );
};
