import { ADD_TASK, DELETE_TASK, TOGGLE_TASK, DELETE_COMPLETED, DRAG_TASK } from '../actions';
import { DEFAULT_TITLE, COMPLETED_TITLE } from '../constants';
import initialState from '../state/initialState';

const isPositionTheSame = (destination, source) => {
  destination.droppableId === source.droppableId && destination.index === source.index;
}

const dndTheSameList = (list, task) => {
  const { source, destination, draggableId } = task;

  const newList = Array.from(list);
  const dropItem = newList.find(item => item.id === draggableId);

  newList.splice(source.index, 1);
  newList.splice(destination.index, 0, dropItem);

  return newList;
}

const dndDifferentLists = (srcList, destList, task) => {
  const { source, destination, draggableId} = task;

  const sourceList = Array.from(srcList);
  const destinationList = Array.from(destList);
  const dropItem = sourceList.find(item => item.id === draggableId);

  sourceList.splice(source.index, 1);
  destinationList.splice(destination.index, 0, dropItem);

  return {
    sourceList, destinationList
  };
}

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
      const { destination, source } = action.task;

      if (!destination || isPositionTheSame(destination, source)) {
        return state;
      }

      if (source.droppableId === destination.droppableId) {
        if (source.droppableId === DEFAULT_TITLE) {
          const newList = dndTheSameList(state.toDoList, action.task)
          return {
            ... state,
            toDoList:  [...newList]
          }
        } else {
          const newList = dndTheSameList(state.completedList, action.task);
          return {
            ... state,
            completedList:  [...newList]
          }
        }
      } else {
        if (source.droppableId === DEFAULT_TITLE && destination.droppableId === COMPLETED_TITLE) {
          const { sourceList, destinationList } = dndDifferentLists(state.toDoList, state.completedList, action.task);
          return {
            ...state,
            toDoList: [...sourceList],
            completedList: [...destinationList]
          }
        } else {
          const { sourceList, destinationList } = dndDifferentLists(state.completedList, state.toDoList, action.task);
          return {
            ...state,
            completedList: [...sourceList],
            toDoList: [...destinationList]
          }
        }
      }
    }
    default:
      return state;
  }
};

export default toDoApp;