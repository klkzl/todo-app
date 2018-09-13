import { ADD_TASK, DELETE_TASK, TOGGLE_TASK, DELETE_COMPLETED, DRAG_TASK } from '../actions';
import initialState from '../state/initialState';

const toDoApp = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return {
        ...state,
        toDoList: [...state.toDoList, action.task]
      }
    }
    case DELETE_TASK: {
      return {
        ...state,
        toDoList: state.toDoList.filter(item => item.id !== action.id),
        completedList: state.completedList.filter(item => item.id !== action.id)
      }
    }
    case TOGGLE_TASK: {
      if (state.toDoList.includes(action.task)) {
        return {
          ...state,
          toDoList: state.toDoList.filter(item => item.id !== action.task.id),
          completedList: [...state.completedList, action.task]
        }
      } else {
        return {
          ...state,
          completedList: state.completedList.filter(item => item.id !== action.task.id),
          toDoList: [...state.toDoList, action.task]
        }
      }
    }
    case DELETE_COMPLETED: {
      return {
        ...state,
        completedList: []
      }
    }
    case DRAG_TASK: {
      const { destination, source, draggableId } = action.task;
      const defaultTitle = "ToDo Tasks";
      const completedTitle = "Completed Tasks";

      // outside of the lists
      if (!destination) {
        return state;
      }
      // dropped in the same position
      if (destination.droppableId === source.droppableId && destination.index === source.index) {
        return state;
      }

      if (source.droppableId === defaultTitle && destination.droppableId === defaultTitle) {
        const newList = Array.from(state.toDoList);
        const dropItem = newList.filter(item => item.id === draggableId);
        newList.splice(source.index, 1);
        newList.splice(destination.index, 0, dropItem[0]);
        return {
          ... state,
          toDoList:  [...newList]
        }
      }

      if (source.droppableId === completedTitle && destination.droppableId === completedTitle) {
        const newList = Array.from(state.completedList);
        const dropItem = newList.filter(item => item.id === draggableId);
        newList.splice(source.index, 1);
        newList.splice(destination.index, 0, dropItem[0]);
        return {
          ... state,
          completedList:  [...newList]
        }
      }

      if (source.droppableId === defaultTitle && destination.droppableId === completedTitle) {
        const sourceList = Array.from(state.toDoList);
        const destinationList = Array.from(state.completedList);
        const dropItem = sourceList.filter(item => item.id === draggableId);
        sourceList.splice(source.index, 1);
        destinationList.splice(destination.index, 0, dropItem[0]);
        return {
          ...state,
          toDoList: [...sourceList],
          completedList: [...destinationList]
        }
      }

      if (source.droppableId === completedTitle && destination.droppableId === defaultTitle) {
        const sourceList = Array.from(state.completedList);
        const destinationList = Array.from(state.toDoList);
        const dropItem = sourceList.filter(item => item.id === draggableId);
        sourceList.splice(source.index, 1);
        destinationList.splice(destination.index, 0, dropItem[0]);
        return {
          ...state,
          completedList: [...sourceList],
          toDoList: [...destinationList]
        }
      }

    }
    default:
      return state;
  }
};

export default toDoApp;