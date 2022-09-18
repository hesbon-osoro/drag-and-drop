import React from 'react';
import Draggable from './Draggable';
import './box.css';

const Box = ({ hasItem, onSelect }) => {
  const dragEnterOrOver = e => {
    if (hasItem) return;
    e.preventDefault();
  };
  return (
    <div
      onDrop={onSelect}
      onDragEnter={dragEnterOrOver}
      onDragOver={dragEnterOrOver}
      className={`box ${hasItem ? 'active' : ''}`}
    >
      {hasItem && <Draggable />}
    </div>
  );
};

export default Box;
