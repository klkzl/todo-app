import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';

import Item from './Item';

{/*
const List = ({ iterateList, title, handleDeleteItem, handleToggleItem, displayTitles, completed }) => (
  <div className={ 'list ' + (completed ? 'completed-list' : 'todo-list') }>
    { displayTitles && <h4>{title}</h4> }
      <ul>
        { iterateList.map(item => (
          <Item
            key={item.id}
            item={item}
            handleToggleItem={handleToggleItem}
            handleDeleteItem={handleDeleteItem}
          />
          ))
        }
      </ul>
  </div>
);

List.propTypes = {
  iterateList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  title: PropTypes.string.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
  handleToggleItem: PropTypes.func.isRequired,
  displayTitles: PropTypes.bool.isRequired,
}
*/}

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