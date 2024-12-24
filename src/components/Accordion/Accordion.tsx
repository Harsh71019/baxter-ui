import React, { useState, FC } from 'react';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
}

const Accordion: FC<AccordionProps> = ({ items, defaultOpenId }) => {
  const [openItemId, setOpenItemId] = useState<string | null>(defaultOpenId || null);

  const toggleItem = (id: string) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (

    <div className="w-full border border-gray-200">
      {items.map((item) => (
        <div key={item.id} className="last:border-none">
          <h2 className="accordion-header">
            <button
              onClick={() => toggleItem(item.id)}
              className={`w-full text-left px-1 py-2 text-xs font-bold transition-colors duration-300
                ${
                  openItemId === item.id
                    ? 'bg-blue-100 text-white'
                    : 'text-blue-100 bg-blue-800 hover:bg-blue-100 hover:text-white'
                }`}
            >
              {item.title}
            </button>
          </h2>
          <div
            className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${
              openItemId === item.id ? 'max-h-full visible' : 'max-h-0 invisible'
            }`}
          >
            <div className="border border-gray-200 px-4 py-2">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
