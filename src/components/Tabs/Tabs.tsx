import React, { useState, FC } from 'react';

export interface TabItem {
  text: string;
  comp: React.ReactNode;
}

export interface TabsProps {
  tabs: TabItem[];
}

const Tabs: FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const containerStyles = `
    bx-mt-4
    bx-border
    bx-border-button-secondary-borderColorNew
    bx-rounded-b-[3px]
  `;

  const headerStyles = `
    bx-border-button-secondary-boxHeaderColor
    bx-min-h-[20px]
    bx-text-[12px]
    bx-text-white
  `;

  const horizontalSeparatorStyles = `
    bx-border-t
    bx-border-gray-300
  `;

  const contentContainerStyles = `
    bx-m-4
  `;

  return (
    <div className={containerStyles}>
      {tabs.map((item, index) => (
        <button
          key={index}
          className={`
            bx-py-2
            bx-px-4
            bx-border-x
            bx-border-t
            bx-rounded-t-lg
            bx-mt-4
            bx-ml-2
            bx-mr-2
            ${activeTab === index
              ? 'bx-bg-white bx-text-black bx-border-button-secondary-activeTabBorder bx-font-bold'
              : 'bx-bg-white bx-border-gray-300'}
          `}
          onClick={() => setActiveTab(index)}
        >
          {item.text}
        </button>
      ))}
      <div className={horizontalSeparatorStyles}></div>
      <div className={headerStyles}></div>
      <div className={contentContainerStyles}>
        {tabs[activeTab].comp}
      </div>
    </div>
  );
};

export default Tabs;
