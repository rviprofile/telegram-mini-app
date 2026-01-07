import { Box, VStack, Text } from "@chakra-ui/react";
import { NavMenu } from "../components/ui/NavMenu/NavMenu";
import { useTelegram } from "../hooks/useTelegram";

export const Profile = () => {
  const tg = useTelegram();

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
        </Box>
      )}

      <NavMenu />
    </VStack>
  );
};
