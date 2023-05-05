import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./Board_Detail_Presenter";
import { FETCH_BOARD } from "./Board_Detail_Queries";

export default function BoardDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  console.log(router.query.boardId);
  return <BoardDetailUI data={data} />;
}
