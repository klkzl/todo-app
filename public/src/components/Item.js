import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';

const draggedItemStyle = (isDragging, draggableStyle) => ({
  background: isDragging ? '#f9f9f9' : 'white',
  ...draggableStyle,
  borderBottom: isDragging ? '1px solid #ea3e70' : '1px solid #9e9181'
})
class Item extends Component {
  render () {

    const { item, index, handleDeleteItem, handleToggleItem } = this.props;

    return (
      <Draggable draggableId={item.id} index={index}>
        {(provided, snapshot) => (
          <li
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            style={draggedItemStyle(snapshot.isDragging, provided.draggableProps.style)}
          >
            {item.name}
            <div className="list-buttons">
              <button onClick={(e) => handleToggleItem(item)}>
                <i className="icon-check"></i>
              </button>
              <button  onClick={(e) => handleDeleteItem(item)}>
                <i className="icon-cancel"></i>
              </button>
            </div>
          </li>
        )}
      </Draggable>
    );
  }
}

export default Item;