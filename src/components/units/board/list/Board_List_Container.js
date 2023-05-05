import { useRouter } from "next/router";
import Board_Detail_Presenter from "./Board_List_Presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./Board_List_Queries";

export default function Board_List_Container() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);

  const onClickMoveToBoardNew = () => {
    router.push("/boards/new");
  };
  const onClickMoveToBoardDetail = (e) => {
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
