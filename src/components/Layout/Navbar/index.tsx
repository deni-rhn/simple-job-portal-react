import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  Stack,
  Image
} from '@chakra-ui/react';
import { GetUserData } from '../../../helpers/LocalStorage';

export default function Navbar() {
  const userData = GetUserData();

  return (
    <>
      <Box bg={'#3D82BF'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Image width={60} src={'https://dansmultipro.com/wp-content/uploads/2020/03/logo_web_header-810x180-1.png'} />
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={userData ? userData.picture : 'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}