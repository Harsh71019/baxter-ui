import React, { useState, FC } from 'react';

export interface TabItem {
  text: string;
  comp: React.ReactNode;
  id?: string;
  onClick?: (index: number) => void;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: TabItem[];
}

const Tabs: FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const containerStyles = `
    mt-4
    border
    border-border-200
    rounded-b-[3px]
  `;

  const headerStyles = `
    border-blue-100
    min-h-[20px]
    text-[12px]
    text-white
  `;

  const horizontalSeparatorStyles = `
    border-t
    border-gray-300
  `;

  const contentContainerStyles = `
    m-4
  `;

  const handleTabClick = (index: number, customOnClick?: (index: number) => void) => {
    if (!tabs[index].disabled) {
      setActiveTab(index);
      if (customOnClick) customOnClick(index);
    }
  };

  return (
    <div className={containerStyles}>
      {tabs.map((item, index) => (
        <button
          key={item.id || index}
          id={item.id}
          className={`
            py-2
            px-4
            border-x
            border-t
            rounded-t-lg
            mt-4
            ml-2
            mr-2
            ${activeTab === index
              ? 'bg-white text-black border-button-secondary-activeTabBorder font-bold'
              : 'bg-white border-gray-300'}
            ${item.disabled ? 'opacity-50 cursor-not-allowed' : ''}
          `}
          onClick={() => handleTabClick(index, item.onClick)}
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
