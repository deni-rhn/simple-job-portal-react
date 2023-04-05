import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Skeleton,
  Stack
} from "@chakra-ui/react";
import Navbar from "../../../components/Layout/Navbar";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { JobResponse } from "../../../interfaces/JobResponse";

const JobDetail = () => {
  const [data, setData] = useState<JobResponse>();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const qParams = useParams();

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = () => {
    setLoading(true);
    const baseUrl = process.env.REACT_APP_SERVICE_API;
    fetch(`${baseUrl}/api/recruitment/positions/${qParams['*']}`)
      .then(res => res.json())
      .then(result => setData(result))
      .finally(() => setLoading(false));
  }

  return(
    <Box>
      <Navbar />
      <Box
        paddingLeft={10}
        paddingRight={10}
        paddingTop={5}
        paddingBottom={10}
      >
        <Button leftIcon={<ChevronLeftIcon />} variant={'link'} colorScheme="blue" onClick={() => navigate(-1)}>Back</Button>
        {loading ?
          <Stack>
            <Skeleton height='400px' />
          </Stack>
        : (
          <Box mt={5}>
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink href='#'>{data?.type}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href='#'>{data?.location}</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading mb={5}>{data?.title}</Heading>
            <Divider />
            <Flex mt={5}>
              <Box w={'70%'} pr={10}>
                <Box fontSize={14} dangerouslySetInnerHTML={{__html: String(data?.description)}}></Box>
              </Box>
              <Box w={'30%'}>
                <Box border={'1px solid #EEF1F6'} padding={2} borderRadius={4}>
                  <Heading fontSize={16} mb={2}>{data?.company}</Heading>
                  <Divider />
                  <Image
                    w={'full'}
                    maxH={'200px'}
                    fallbackSrc="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
                    src={data?.company_logo ? data.company_logo : 'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'}
                  />
                  <Link href={data?.company_url} target="_blank" color={'blue'}>{data?.company_url}</Link>
                </Box>
                <Box backgroundColor={'#FFFEF1'} mt={8} border={'1px solid #EEF1F6'} padding={2} borderRadius={4}>
                  <Heading fontSize={16} mb={2}>How To Apply</Heading>
                  <Divider />
                  <Box mt={5} fontSize={12} dangerouslySetInnerHTML={{__html: String(data?.how_to_apply)}}></Box>
                </Box>
              </Box>
            </Flex>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default JobDetail;