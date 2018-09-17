import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
class Item extends Component {
  render () {

    const { item, index, handleDeleteItem, handleToggleItem } = this.props;

    return (
      <Draggable draggableId={item.id} index={index}>
        {provided => (
          <li
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
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