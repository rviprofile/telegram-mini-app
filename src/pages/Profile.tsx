import { Box, Stack, Text } from "@chakra-ui/react";
import { NavMenu } from "../components/ui/NavMenu/NavMenu";
import { useTelegram } from "../hooks/useTelegram";

export const Profile = () => {
  const tg = useTelegram();

  return (
    <Stack>
      <Text fontSize="xl">Профиль пользователя</Text>

      {!tg ? (
        <Text>Загрузка данных Telegram...</Text>
      ) : (
        <Box>
          <Text>
            <b>ID:</b> {tg.initDataUnsafe?.user?.id}
          </Text>
          <Text>
            <b>Имя:</b> {tg.initDataUnsafe?.user?.first_name || "-"}
          </Text>
          <Text>
            <b>Фамилия:</b> {tg.initDataUnsafe?.user?.last_name || "-"}
          </Text>
          <Text>
            <b>Username:</b> {tg.initDataUnsafe?.user?.username || "-"}
          </Text>
          <Text>
            <b>Язык:</b> {tg.initDataUnsafe?.user?.language_code || "-"}
          </Text>
        </Box>
      )}

      <NavMenu />
    </Stack>
  );
};
