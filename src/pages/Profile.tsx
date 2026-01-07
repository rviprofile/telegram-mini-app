import { Box, Stack, Text } from "@chakra-ui/react";
import { NavMenu } from "../components/ui/NavMenu/NavMenu";
import { useTelegram } from "../hooks/useTelegram";

// user: import('valibot').OptionalSchema<import('./pipes.js').JsonToSchemaPipe<import('valibot').LooseObjectSchema<{
//             added_to_attachment_menu: import('valibot').OptionalSchema<import('valibot').BooleanSchema<undefined>, undefined>;
//             allows_write_to_pm: import('valibot').OptionalSchema<import('valibot').BooleanSchema<undefined>, undefined>;
//             first_name: StringSchema<undefined>;
//             id: NumberSchema<undefined>;
//             is_bot: import('valibot').OptionalSchema<import('valibot').BooleanSchema<undefined>, undefined>;
//             is_premium: import('valibot').OptionalSchema<import('valibot').BooleanSchema<undefined>, undefined>;
//             last_name: import('valibot').OptionalSchema<StringSchema<undefined>, undefined>;
//             language_code: import('valibot').OptionalSchema<StringSchema<undefined>, undefined>;
//             photo_url: import('valibot').OptionalSchema<StringSchema<undefined>, undefined>;
//             username: import('valibot').OptionalSchema<StringSchema<undefined>, undefined>;

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
    </Stack>
  );
};
