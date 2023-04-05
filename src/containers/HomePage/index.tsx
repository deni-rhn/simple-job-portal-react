import { useEffect, useState } from "react";
import { GetUserData } from "../../helpers/LocalStorage";
import Navbar from "../../components/Layout/Navbar";
import { Box, Skeleton, Stack } from "@chakra-ui/react";
import { HomePageFilter } from "./Partials/Filter";
import { HomePageContent } from "./Partials/Content";
import { IGetCommonParams } from "../../interfaces/IGetCommonParams";
import { JobResponse } from "../../interfaces/JobResponse";
import { ObjectToQueryParams } from "../../helpers/Common";
import { IContentProps, IFilterProps } from "./HomePage.type";

const HomePage = () => {
  const [params, setParams] = useState<IGetCommonParams>({
      page: 1,
      limit: 12
    });
  const [data, setData] = useState<JobResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isDoSearch, setIsDoSearch] = useState<boolean>(false);

  useEffect(() => {
    if (!GetUserData()) {
      window.location.href = '/login';
    }
    fetchAPI(params);
  }, []);

  const fetchAPI = (param: IGetCommonParams) => {
    setLoading(true);
    const baseUrl = process.env.REACT_APP_SERVICE_API;
    fetch(`${baseUrl}/api/recruitment/positions.json?${ObjectToQueryParams(param)}`)
      .then(res => res.json())
      .then(result => setData(result))
      .finally(() => setLoading(false));
  }

  const onChangeJobDesc = (e: any) => {
    setParams(prevParams => ({
        ...prevParams,
        description: e.target.value
      }));
  }

  const onChangeLoc = (e: any) => {
    setParams(prevParams => ({
        ...prevParams,
        location: e.target.value
      }));
  }

  const onChangeFullTime = (e: any) => {
    setParams(prevParams => ({
        ...prevParams,
        full_time: e.target.checked
      }));
  }

  const onDoSearch = () => {
    fetchAPI(params);
    setIsDoSearch(true);
  }

  const onDoLoadMore = () => {
    const param: IGetCommonParams = {
      ...params,
      page: Number(params.page)+1
    }
    setParams(param);
    fetchAPI(param);
  }

  const filterProps: IFilterProps = {
    onChangeFullTime,
    onChangeJobDesc,
    onChangeLoc,
    onDoSearch
  }

  const contentProps: IContentProps = {
    data,
    onDoLoadMore,
    params,
    isDoSearch
  }

  return(
    <Box>
      <Navbar />
      <HomePageFilter {...filterProps} />
      {loading ? (
        <Stack>
          <Skeleton height='400px' />
        </Stack>
      ) : (
        <HomePageContent {...contentProps} />
      )}
    </Box>
  );
}

export default HomePage;