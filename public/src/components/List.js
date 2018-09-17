import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import Item from './Item';
class List extends Component {
  render() {

    const { iterateList, title, handleDeleteItem, handleToggleItem, displayTitles, completed } = this.props;

    return (
      <div className={ 'list ' + (completed ? 'completed-list' : 'todo-list') }>
        { displayTitles && <h4>{title}</h4> }
        <Droppable droppableId={title}>
          {provided => (
            <ul
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              { iterateList.map((item, index) => (
                <Item
                  key={item.id}
                  item={item}
                  index={index}
                  handleToggleItem={handleToggleItem}
                  handleDeleteItem={handleDeleteItem}
                />
              ))
              }
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </div>
    );
  }
}

export default List;