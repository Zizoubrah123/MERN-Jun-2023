import React, { useState } from 'react';

function Tabs({ items }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    console.log(index);
    setActiveTab(index);
  };

  return (
   
    <div>
      <div className="root">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => handleTabClick(index)}>
            <button>{item.label}</button>
          </div>
        ))}
      </div>
      <div className="tab-content"> 
        {items[activeTab].content}
      </div>
    </div>
  );
  
}

export default Tabs;