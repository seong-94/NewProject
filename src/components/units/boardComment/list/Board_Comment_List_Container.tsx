import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./Board_Comment_List_Queries";
import BoardCommentListUI from "./Board_Comment_List_Presenter";

export default function Boar_Comment_List_Container() {
  const router = useRouter();
  if (!router || typeof router.query.boardId !== "string") return <></>;

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onClickDelete = async (e: MouseEvent<HTMLImageElement>) => {
    const password = prompt("비밀번호를 입력하세요");
    try {
      if (!(e.target instanceof HTMLImageElement)) {
        alert("시스템에 문제가 있습니다.");
        return;
      }
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: e.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };
  return <BoardCommentListUI onClickDelete={onClickDelete} data={data} />;
}
