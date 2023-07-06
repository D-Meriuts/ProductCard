import React, { useEffect } from "react";
import { Close, Wrapper, Header } from "./styled";

export default function PopUp({ isShow, onClose, title, children }) {
  const handlerEsc = (evt) => {
    if (evt.keyCode === 27) {
      onClose && onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handlerEsc);
    return () => {
      document.removeEventListener("keydown", handlerEsc);
    };
  }, []);
  return isShow ? (
    <Wrapper>
      <Header>
        {title}{" "}
        <Close size="small" onClick={onClose}>
          x
        </Close>
      </Header>
      {children}
    </Wrapper>
  ) : null;
}
