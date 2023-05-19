import React, { useState, MouseEvent } from "react";
import PaginationPresenter from "./PaginationPresenter";
import { IPaginationsProps } from "./PaginationTypes";

export default function PaginationContainer(props: IPaginationsProps) {
  const [startPage, setStartPage] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const lastPage = Math.ceil((props.count ?? 10) / 10);

  const onClickPage = (event: MouseEvent<HTMLDivElement>): void => {
    const activePage = Number(event.currentTarget.id);
    setActivePage(activePage);
    void props.refetch({ page: activePage });
    console.log(event.currentTarget.id);
  };

  const onClickPrevPage = (): void => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    setActivePage(startPage - 10);
    void props.refetch({ page: activePage - 10 });
  };

  const onClickNextPage = (): void => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      setActivePage(startPage + 10);
      void props.refetch({ page: activePage + 10 });
    }
  };
  return (
    <PaginationPresenter
      onClickPage={onClickPage}
      onClickNextPage={onClickNextPage}
      onClickPrevPage={onClickPrevPage}
      startPage={startPage}
      lastPage={lastPage}
      activePage={activePage}
    />
  );
}
