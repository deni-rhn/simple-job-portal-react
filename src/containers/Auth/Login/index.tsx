import React, { useEffect } from "react";
import {
  Flex,
  Heading,
  Stack,
  Image,
} from '@chakra-ui/react';
import { GoogleLogin } from "@react-oauth/google";
import { DecodeGoogleCredentials } from "../../../helpers/JwtDecoder";
import { GoogleAccountResponse } from "../../../interfaces/GoogleAccountResponse";
import { GetUserData } from "../../../helpers/LocalStorage";

const LoginPage: React.FC = () => {

  useEffect(() => {
    if (GetUserData()) {
      window.location.href = '/';
    }
  }, []);

  return(
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to get your Job!</Heading>
          <GoogleLogin
            onSuccess={response => {
              const googleUsers: GoogleAccountResponse = DecodeGoogleCredentials(String(response.credential));
              localStorage.setItem('googleAccount', JSON.stringify(googleUsers));
              setTimeout(() => window.location.href = '/', 1000);
            }}
            onError={() => console.log('ERROR LOGIN')}
            size="large"
          />
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
  );
}

export default LoginPage;