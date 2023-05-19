import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../commons/types/generated/types";
import { ApolloQueryResult } from "@apollo/client";

export interface IPaginationsProps {
  count?: number;
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}

export interface IPaginationUIProps {
  startPage: number;
  lastPage: number;
  activePage: number;
  onClickPage: (event: MouseEvent<HTMLDivElement>) => void;
  onClickNextPage: () => void;
  onClickPrevPage: () => void;
}
