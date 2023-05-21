import BoardDetail from "../../../src/components/units/board/detail/BoardDetailContainer";
import BoardCommentListContainer from "../../../src/components/units/boardComment/list/BoardCommentListContainer";
import BoardCommentwriteContainer from "../../../src/components/units/boardComment/write/BoardCommentwriteContainer";

export default function BoardsDetailPage() {
  return (
    <>
      <BoardDetail />
      <BoardCommentListContainer />
      <BoardCommentwriteContainer />
    </>
  );
}
