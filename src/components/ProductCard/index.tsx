import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface IProps {
  picture: string;
  title: string;
  subTitle: string;
  description: string;
  type: string;
  location: string;
  id: string | number;
}

const ProductCard: React.FC<IProps> = ({
  description,
  location,
  picture,
  subTitle,
  title,
  type,
  id
}) => {
  const navigate = useNavigate();
  const onDirect = () => navigate(`/job/${id}`);

  return(
    <Center>
      <Box
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'md'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={ picture ? picture :
            'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'
          }
          mb={4}
          pos={'relative'}
        />
        <Heading fontSize={16} fontFamily={'body'}>
          {title}
        </Heading>
        <Text fontSize={13} className='max-line-2p' fontWeight={600} color={'gray.500'} mb={4}>
          {subTitle}
        </Text>
        <Box fontSize={12} className='max-line-2p' dangerouslySetInnerHTML={{__html: description}}></Box>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #{location}
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #{type}
          </Badge>
        </Stack>

        <Stack mt={8} spacing={4}>
          <Button
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            w={'full'}
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}
            onClick={onDirect}>
            Details
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}

export default ProductCard;