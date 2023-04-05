import { DragHandleIcon } from "@chakra-ui/icons";
import { Box, Button, Checkbox, Flex, Heading, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { IFilterProps } from "../HomePage.type";

export const HomePageFilter: React.FC<IFilterProps> = ({
  onChangeFullTime,
  onChangeJobDesc,
  onChangeLoc,
  onDoSearch
}) => {
  return(
    <Box
      backgroundColor={'#FAFAFA'}
      padding={4}
    >
      <Flex>
        <Box w={'35%'}>
          <Heading fontSize={14} mb={2}>Job Description</Heading>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<DragHandleIcon color='gray.300' />}
            />
            <Input
              placeholder='Filter by title, benefits, companies, expertise'
              onChange={onChangeJobDesc}
            />
          </InputGroup>
        </Box>
        <Box w={'35%'} ml={2}>
          <Heading fontSize={14} mb={2}>Location</Heading>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<DragHandleIcon color='gray.300' />}
            />
            <Input placeholder='Filter by city, state, zip code or country' onChange={onChangeLoc} />
          </InputGroup>
        </Box>
        <Box marginTop={'32px'} w={'15%'} ml={4}>
          <Checkbox onChange={onChangeFullTime}><b>Full Time Only</b></Checkbox>
        </Box>
        <Box w={'15%'}>
          <Button onClick={onDoSearch} marginTop={'20px'} colorScheme="blue">Search</Button>
        </Box>
      </Flex>
    </Box>
  );
}