// components/Menu.jsx
import React from 'react';

function Menu({ setActive }) {
  const items = [
    'Accordion',
    'Random Color',
    'Star Rating',
    'Slider',
    'Load More',
    'Tree View'
  ];

  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      {items.map((item) => (
        <button key={item} onClick={() => setActive(item)}>
          {item}
        </button>
      ))}
    </div>
  );
}

export default Menu;
