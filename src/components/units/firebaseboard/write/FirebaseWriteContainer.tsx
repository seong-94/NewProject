import { useState } from "react";
import type { ChangeEvent } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore/lite";
import FirebaseWriteUI from "./FirebaseWritePresenter";
import { useRouter } from "next/router";
import { boardApp } from "../../../../commons/libraies/firebase";

export default function FirebaseWrite(): JSX.Element {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onClickSubmit = async () => {
    const board = collection(getFirestore(boardApp), "board");
    await addDoc(board, { writer, title, contents });
    alert("게시물 등록에 성공하였습니다!");
    void router.push("/firebase");
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>): void => {
    setContents(event.target.value);
  };

  return (
    <FirebaseWriteUI
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
    />
  );
}
