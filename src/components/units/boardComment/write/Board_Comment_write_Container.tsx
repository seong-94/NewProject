import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { CREATE_BOARD_COMMENT } from "./Board_Comment_write_Queries";
import { FETCH_BOARD_COMMENTS } from "../list/Board_Comment_List_Queries";
import BoardCommentWriteUI from "./Board_Comment_write_Presenter";
export default function BoarCommentListContainer() {
  const router = useRouter();
  const [writer, SetWriter] = useState("");
  const [password, SetPassword] = useState("");
  const [contents, SetContents] = useState("");

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
    SetWriter(e.target.value);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    SetPassword(e.target.value);
  };
  const onChangeContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
    SetContents(e.target.value);
  };

  const onClickComment = async () => {
    try {
      if (typeof router.query.boardId !== "string") {
        alert("시스템 문제 발생");
        return;
      }
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating: 0,
          },
          boardId: router.query.boardId,
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
  return (
    <BoardCommentWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickComment={onClickComment}
      contents={contents}
    />
  );
}
