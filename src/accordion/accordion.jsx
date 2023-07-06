import React, { useState, useRef, useEffect } from "react";
import { Content, TitleButton, Wrapper, ContentWrapper } from "./styled";

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [height, setHeight] = useState(0);
  const openContent = useRef(null);
  useEffect(() => {
    setHeight(openContent.current.offsetHeight);
  }, [height, activeIndex, items]);
  return (
    <div>
      {items &&
        items.length &&
        items.map((item, index) =>
          index === activeIndex ? (
            <Wrapper key={item.title}>
              <TitleButton as="span" isActive>
                {item.title}
              </TitleButton>
              <ContentWrapper style={{ height }}>
                <Content ref={openContent}>{item.content}</Content>
              </ContentWrapper>
            </Wrapper>
          ) : (
            <Wrapper key={item.title}>
              <TitleButton onClick={() => setActiveIndex(index)}>
                {item.title}
              </TitleButton>
              <ContentWrapper>
                <Content>{item.content}</Content>
              </ContentWrapper>
            </Wrapper>
          )
        )}
    </div>
  );
}

export default Accordion;
