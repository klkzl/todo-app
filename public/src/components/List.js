import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import Item from './Item';

const getListStyle = isDraggingOver => ({
  backgroundColor: isDraggingOver ? '#f4f4f4': 'white',
  listStyleType: 'none'
});
class List extends Component {
  render() {

    const { iterateList, title, handleDeleteItem, handleToggleItem, displayTitles, completed } = this.props;

    return (
      <div className={ 'list ' + (completed ? 'completed-list' : 'todo-list') }>
        <Droppable droppableId={title}>
          {(provided, snaphot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={getListStyle(snaphot.isDraggingOver)}
            >
              { displayTitles && <h4>{title}</h4> }
              <ul>
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
              </ul>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    );
  }
}

export default List;