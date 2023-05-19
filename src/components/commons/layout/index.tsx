import React from "react";
import LayoutHeaderContainer from "./header/LayoutHeaderContainer";
import LayoutBannerContainer from "./banner/LayoutBannerContainer";
import LayoutNavigation from "./navigation/LayoutNavigationContainer";
import styled from "@emotion/styled";

const Body = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ILayoutProps {
  children: JSX.Element;
}
export default function Layout(props: ILayoutProps): JSX.Element {
  return (
    <>
      <LayoutHeaderContainer />;
      <LayoutBannerContainer />
      <LayoutNavigation />
      <Body>{props.children}</Body>
    </>
  );
}
