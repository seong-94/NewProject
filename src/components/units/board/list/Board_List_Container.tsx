import { MouseEvent } from "react";
import { useRouter } from "next/router";
import Board_Detail_Presenter from "./Board_List_Presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./Board_List_Queries";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export default function Board_List_Container() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickMoveToBoardNew = () => {
    router.push("/boards/new");
  };

  const onClickMoveToBoardDetail = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLDivElement)
      router.push(`/boards/${e.target.id}`);
  };
  return (
    <Board_Detail_Presenter
      data={data}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
    />
  );
}
