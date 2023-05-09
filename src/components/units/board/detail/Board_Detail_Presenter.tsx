import { getMyDate } from "../../../../commons/libraies/utils";
import * as Style from "./Board_Detail_styles";
import { IBoardDetailUIProps } from "./Board_Detail_types";

export default function Board_Detail_Presenter(props: IBoardDetailUIProps) {
  return (
    <Style.Wrapper>
      <Style.CardWrapper>
        <Style.Header>
          <Style.AvatarWrapper>
            <Style.Avatar src="/images/avatar.png" />
            <Style.Info>
              <Style.Writer>{props.data?.fetchBoard?.writer}</Style.Writer>
              <Style.CreatedAt>
                {getMyDate(props.data?.fetchBoard?.createdAt)}
              </Style.CreatedAt>
            </Style.Info>
          </Style.AvatarWrapper>
        </Style.Header>
        <Style.Body>
          <Style.Title>{props.data?.fetchBoard?.title}</Style.Title>
          <Style.Contents>{props.data?.fetchBoard?.contents}</Style.Contents>
        </Style.Body>
      </Style.CardWrapper>
      <Style.BottomWrapper>
        <Style.Button>목록으로</Style.Button>
        <Style.Button onClick={props.onClickEdit}>수정하기</Style.Button>
        <Style.Button>삭제하기</Style.Button>
      </Style.BottomWrapper>
    </Style.Wrapper>
  );
}
