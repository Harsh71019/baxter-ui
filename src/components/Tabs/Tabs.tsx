import React, { useState, FC } from 'react';

export interface TabItem {
  text: string;
  comp: React.ReactNode;
  id: string;
  onClick?: (id: string) => void;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: TabItem[];
  defaultActiveId?: string;
}

const Tabs: FC<TabsProps> = ({ tabs, defaultActiveId }) => {
  const [activeTabId, setActiveTabId] = useState<string>(defaultActiveId || tabs[0]?.id);

  const containerStyles = `
    border
    border-solid
    border-border-200
    rounded-b
    border-t-0
  `;

  const tabButtonStyles = `
    py-1
    px-2
    border-x
    border-t
    rounded-t-lg
    mr-2
  `;

  const headerStyles = `
    bg-blue-100
    min-h-[20px]
    leading-[20px]
    text-[12px]
    text-white
    px-5
  `;

  const footerStyles = `
    bg-blue-100
    min-h-[4px]
    leading-[4px]
    text-[12px]
    text-white
    px-5
  `;

  const contentContainerStyles = `
    m-4
  `;

  const handleTabClick = (id: string, customOnClick?: (id: string) => void) => {
    const selectedTab = tabs.find(tab => tab.id === id);
    if (selectedTab && !selectedTab.disabled) {
      setActiveTabId(id);
      if (customOnClick) customOnClick(id);
    }
  };

  return (
    <div>
      {tabs.map(item => (
        <button
          key={item.id}
          id={item.id}
          className={` ${tabButtonStyles} ${
            activeTabId === item.id
              ? 'border-border-200 bg-white font-bold text-black'
              : 'border-gray-500 bg-white'
          } ${item.disabled ? 'cursor-not-allowed opacity-50' : ''} `}
          onClick={() => handleTabClick(item.id, item.onClick)}
        >
          {item.text}
        </button>
      ))}

      <div className={containerStyles}>
        <div className={headerStyles}></div>

        <div className={contentContainerStyles}>
          {tabs.find(tab => tab.id === activeTabId)?.comp}
        </div>

        <div className={footerStyles}></div>
      </div>
    </div>
  );
};

export default Tabs;
