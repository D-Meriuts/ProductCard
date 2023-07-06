import React, { useState } from "react";
import { TitleList, TitleButton, TitleText, Content } from "./styled";

function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <TitleList>
        {tabs &&
          tabs.length &&
          tabs.map((item, index) => {
            if (index === activeTab) {
              return (
                <TitleButton active key={item.title}>
                  <TitleText small active as="h2">
                    {item.title}
                  </TitleText>
                </TitleButton>
              );
            }
            return (
              <TitleButton key={item.title} onClick={() => setActiveTab(index)}>
                <TitleText small as="h2">
                  {item.title}
                </TitleText>
              </TitleButton>
            );
          })}
      </TitleList>
      <Content>{tabs[activeTab].content}</Content>
    </div>
  );
}

export default Tabs;
