import BoardDetail from "../../../src/components/units/board/detail/Board_Detail_Container";
import Board_Comment_List_Container from "../../../src/components/units/boardComment/list/Board_Comment_List_Container";
import Board_Comment_write_Container from "../../../src/components/units/boardComment/write/Board_Comment_write_Container";

export default function BoardsDetailPage() {
  return (
    <>
      <BoardDetail />
      <Board_Comment_List_Container />
      <Board_Comment_write_Container />
    </>
  );
}
