import { Box, Button, Center, Heading, SimpleGrid, Text } from '@chakra-ui/react'; 
import ProductCard from '../../../components/ProductCard';
import React from 'react';
import { IContentProps } from '../HomePage.type';
import NotFound from '../../../components/404';

export const HomePageContent: React.FC<IContentProps> = ({
  data,
  onDoLoadMore,
  params,
  isDoSearch
}) => {

  return(
    <Box
      paddingTop={5}
      paddingBottom={10}
      paddingLeft={10}
      paddingRight={10}
    >
      <Heading fontSize={24} mb={4}>
        {(params.full_time || params.description || params.location) && isDoSearch ? `Showing ${data.length} Jobs` : 'Job List'}
      </Heading>
      <SimpleGrid
        columns={4}
        spacing={10}
      >
        {data.length ?
          data.map(item => (
            item ? (
              <Box key={item.id}>
                <ProductCard
                  description={item.description}
                  location={item.location}
                  picture={item.company_logo}
                  subTitle={item.company}
                  title={item.title}
                  type={item.type}
                  id={item.id}
                />
              </Box>
            ) : <Text>Error Response API</Text>
          ))
        : <NotFound />}
      </SimpleGrid>
      <Center mt={10}>
        <Button onClick={onDoLoadMore} size={'sm'} colorScheme='blue' borderRadius={'full'}>Load More Jobs</Button>
      </Center>
    </Box>
  );
}