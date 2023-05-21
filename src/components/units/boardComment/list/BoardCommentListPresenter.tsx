import BoardCommentListScroll from "./BoardCommentListScroll";
import type { IBoardCommentListUIProps } from "./BoardCommentListTypes";
import InfiniteScroll from "react-infinite-scroller";

export default function BoardCommentListUI(
  props: IBoardCommentListUIProps
): JSX.Element {
  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.fetchBoardComments.map((el) => (
        <BoardCommentListScroll key={el._id} el={el} />
      )) ?? <></>}
    </InfiniteScroll>
  );
}
