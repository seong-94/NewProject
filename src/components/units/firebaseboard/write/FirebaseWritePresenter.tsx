import * as S from "./FirebaseWriteStyles";
import type { IFirebaseWriteUIProps } from "./FirebaseWriteTypes";

export default function FirebaseWrite(
  props: IFirebaseWriteUIProps
): JSX.Element {
  return (
    <S.Wrapper>
      <S.InputWrapper>
        작성자:
        <S.MyInput
          type="text"
          onChange={props.onChangeWriter}
          placeholder="작성자를 입력하세요."
        />
      </S.InputWrapper>
      <S.InputWrapper>
        제 목:
        <S.MyInput
          type="text"
          onChange={props.onChangeTitle}
          placeholder="제목을 입력하세요."
        />
      </S.InputWrapper>
      <S.InputWrapper>
        내 용:
        <S.MyInput
          type="text"
          onChange={props.onChangeContents}
          placeholder="내용을 입력하세요."
        />
      </S.InputWrapper>
      <S.ButtonWrapper>
        <S.MyButton onClick={props.onClickSubmit}>
          <S.InnerLogo>💎 LIVE</S.InnerLogo> 등록하기
        </S.MyButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
