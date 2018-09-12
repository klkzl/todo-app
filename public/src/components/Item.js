import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

{/*
const Item = ({ item, handleDeleteItem, handleToggleItem }) => (
  <li key={item.id}>
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
);

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
  handleToggleItem: PropTypes.func.isRequired,
}
*/}

class Item extends Component {
  render () {
    const { item, index, handleDeleteItem, handleToggleItem } = this.props;

    return (
      <Draggable draggableId={item.id} index={index}>
        {provided => (
          <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
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