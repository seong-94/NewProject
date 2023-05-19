import { useRouter } from "next/router";
import React from "react";
import LayoutHeaderPresenter from "./LayoutHeaderPresenter";

export default function LayoutHeaderContainer(): JSX.Element {
  const router = useRouter();

  const onClickLogo = (): void => {
    void router.push("/boards");
  };
  const onClickMoveToLogin = (): void => {
    void router.push("/login");
  };
  return (
    <LayoutHeaderPresenter
      onClickLogo={onClickLogo}
      onClickMoveToLogin={onClickMoveToLogin}
    />
  );
}
