import React, { useState } from 'react';
import Accordion from './components/accordion/Accordion.jsx';
import Randomclr from './components/randomColor/randomclr.jsx';
import Star from './components/star/Star.jsx';
import Slider from './components/imageSlider/Slider.jsx';
import Load from './components/loadmore/Load.jsx';
import Tree from './components/treeview/Tree.jsx';
import menus from './components/treeview/Tree.js';
import Menu from './Menu.jsx'; // new

function App() {
  const [active, setActive] = useState('');

  const renderComponent = () => {
    switch (active) {
      case 'Accordion':
        return <Accordion />;
      case 'Random Color':
        return <Randomclr />;
      case 'Star Rating':
        return <Star />;
      case 'Slider':
        return <Slider />;
      case 'Load More':
        return <Load />;
      case 'Tree View':
        return <Tree menus={menus} />;
      default:
        return <p>Select a project from the menu</p>;
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Menu setActive={setActive} />
      {renderComponent()}
    </div>
  );
}

export default App;
