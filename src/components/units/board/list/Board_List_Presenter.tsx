import { getMyDate } from "../../../../commons/libraies/utils";
import * as Style from "./Board_List_styles";
import { IBoardListUIProps } from "./Board_List_types";

export default function BoardListPresenter(props: IBoardListUIProps) {

  return (
    <Style.Wrapper>
      <Style.TableTop />
      <Style.Row>
        <Style.ColumnHeaderBasic>ID</Style.ColumnHeaderBasic>
        <Style.ColumnHeaderTitle>제목</Style.ColumnHeaderTitle>
        <Style.ColumnHeaderBasic>작성자</Style.ColumnHeaderBasic>
        <Style.ColumnHeaderBasic>날짜</Style.ColumnHeaderBasic>
      </Style.Row>
      {props.data?.fetchBoards.map((el) => (
        <Style.Row key={el._id}>
          <Style.ColumnBasic>
            {String(el._id).slice(-4).toUpperCase()}
          </Style.ColumnBasic>
          <Style.ColumnTitle
            id={el._id}
            onClick={props.onClickMoveToBoardDetail}
          >
            {el.title}
          </Style.ColumnTitle>
          <Style.ColumnBasic>{el.writer}</Style.ColumnBasic>
          <Style.ColumnBasic>{getMyDate(el.createdAt)}</Style.ColumnBasic>
        </Style.Row>
      ))}
      <Style.TableBottom />
      <Style.Footer>
        <Style.Button onClick={props.onClickMoveToBoardNew}>
          <Style.PencilIcon src="/images/board/list/write.png" />
          게시물 등록하기
        </Style.Button>
      </Style.Footer>
    </Style.Wrapper>
  );
}
