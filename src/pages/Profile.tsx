import { Box, VStack, Text } from "@chakra-ui/react";
import { NavMenu } from "../components/NavMenu/NavMenu";
import { useTelegram } from "../hooks/useTelegram";
import { useAuth } from "../components/AuthProvider";

export const Profile = () => {
  const { tg, initData } = useTelegram();

  const auth = useAuth();

  return (
    <VStack minH={"calc(100dvh - 74px)"}>
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
            <b>initData:</b> {initData ? "Существует" : "Нет данных"}
          </Text>
          <Text>
            <b>start_param:</b> {tg.tgWebAppStartParam}
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
