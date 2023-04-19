import {
  Address,
  ButtonWrapper,
  Contents,
  ImageWrapper,
  InputWrapper,
  Label,
  OptionWrapper,
  Password,
  RadioButton,
  RadioLabel,
  SearchButton,
  Subject,
  SubmitButton,
  Title,
  UploadButton,
  Wrapper,
  Writer,
  WriterWrapper,
  Youtube,
  Zipcode,
  ZipcodeWrapper,
} from "@/styles/emotion";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation creteBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function BoardWriteUI() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [password, setPassword] = useState("");

  const [writerErr, setWriterErr] = useState("");
  const [titleErr, setTitleErr] = useState("");
  const [contentsErr, setContentsErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeWriter = (e) => {
    setWriter(e.target.value);
    if (e.target.value !== "") {
      setWriterErr("");
    }
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    if (e.target.value !== "") {
      setTitleErr("");
    }
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value !== "") {
      setPasswordErr("");
    }
  };
  const onChangeContents = (e) => {
    setContents(e.target.value);
    if (e.target.value !== "") {
      setContentsErr("");
    }
  };

  const onClickSubmit = async (e) => {
    if (!writer) {
      setWriterErr("작성자를 입력해주세요.");
    }
    if (!title) {
      setTitleErr("작성자를 입력해주세요.");
    }
    if (!password) {
      setPasswordErr("작성자를 입력해주세요.");
    }
    if (!contents) {
      setContentsErr("작성자를 입력해주세요.");
    }
    if (writer && password && title && contents) {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: writer,
            password: password,
            title: title,
            contents: contents,
          },
        },
      });
      console.log(result);
    }
  };

  return (
    <Wrapper>
      <Title>게시글 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer onChange={onChangeWriter} type="text" placeholder="이름을 적어주세요." />
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password
            onChange={onChangePassword}
            type="password"
            placeholder="비밀번호를 작성해주세요."
          />
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject onChange={onChangeTitle} type="text" placeholder="제목을 작성해주세요." />
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents onChange={onChangeContents} placeholder="내용을 작성해주세요." />
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode placeholder="07250" />
          <SearchButton>우편번호 검색</SearchButton>
        </ZipcodeWrapper>
        <Address />
        <Address />
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube placeholder="링크를 복사해주세요." />
      </InputWrapper>
      <ImageWrapper>
        <Label>사진첨부</Label>
        <UploadButton>+</UploadButton>
        <UploadButton>+</UploadButton>
        <UploadButton>+</UploadButton>
      </ImageWrapper>
      <OptionWrapper>
        <Label>메인설정</Label>
        <RadioButton type="radio" id="youtube" name="radio-button" />
        <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
        <RadioButton type="radio" id="image" name="radio-button" />
        <RadioLabel htmlFor="image">사진</RadioLabel>
      </OptionWrapper>
      <ButtonWrapper>
        <SubmitButton onClick={onClickSubmit}>등록하기</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
