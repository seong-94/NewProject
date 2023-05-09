import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./Board_Detail_Presenter";
import { FETCH_BOARD } from "./Board_Detail_Queries";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardDetail() {
  const router = useRouter();
  if (!router || typeof router.query.boardId !== "string") return <></>;
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: router.query.boardId },
    }
  );
  const onClickEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };
  return <BoardDetailUI data={data} onClickEdit={onClickEdit} />;
}
