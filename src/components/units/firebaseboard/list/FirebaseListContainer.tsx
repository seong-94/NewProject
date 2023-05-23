import { useEffect, useState } from "react";
import FirebaseListUI from "./FirebaseListPresenter";
import { collection, getFirestore, getDocs } from "firebase/firestore/lite";
import type { DocumentData } from "firebase/firestore/lite";
import { useRouter } from "next/router";
import { boardApp } from "../../../../commons/libraies/firebase";

export default function FirebaseListContainer(): JSX.Element {
  const router = useRouter();
  const [dataBoards, setDataBoards] = useState<DocumentData[]>([]);

  useEffect(() => {
    const fetchBoards = async (): Promise<void> => {
      const board = collection(getFirestore(boardApp), "board");
      const result = await getDocs(board);
      const boards = result.docs.map((el) => el.data());
      setDataBoards(boards);
    };
    void fetchBoards();
  }, []);

  const onClickMoveToBoardNew = (): void => {
    void router.push("/myfirebase/new");
  };

  return (
    <FirebaseListUI
      dataBoards={dataBoards}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
    />
  );
}
