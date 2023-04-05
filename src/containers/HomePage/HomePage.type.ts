import { IGetCommonParams } from "../../interfaces/IGetCommonParams";
import { JobResponse } from "../../interfaces/JobResponse";

export interface IFilterProps {
  onChangeJobDesc: (e: any) => void;
  onChangeLoc: (e: any) => void;
  onChangeFullTime: (e: any) => void;
  onDoSearch: () => void;
}

export interface IContentProps {
  data: JobResponse[];
  onDoLoadMore: () => void;
  params: IGetCommonParams;
  isDoSearch: boolean;
}