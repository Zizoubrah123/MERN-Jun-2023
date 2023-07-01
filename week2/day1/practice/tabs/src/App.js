import React from 'react';
import Tabs from './components/Tabs';

function App() {
  const tabItems = [
    {
      label: 'Tab1',
      content: <p>Content for Tab 1</p>
    },
    {
      label: 'Tab2',
      content: <p>Content for Tab 2</p>
    },
    {
      label: 'Tab3',
      content: <p>Content for Tab 3</p>
    }
  ];

  return (
  <div className='root'>
    <h1>tabs</h1>
    <Tabs items={tabItems}/>

  </div>
 )
 };
export default App;