import { ADD_TASK, DELETE_TASK, TOGGLE_TASK, DELETE_COMPLETED, DRAG_TASK } from '../actions';
import initialState from '../state/initialState';

const toDoApp = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return { ...state, toDoList: [...state.toDoList, action.task] }
    }
    case DELETE_TASK: {
      return { ...state,
        toDoList: state.toDoList.filter(item => item.id !== action.id),
        completedList: state.completedList.filter(item => item.id !== action.id)
      }
    }
    case TOGGLE_TASK: {
      if (state.toDoList.includes(action.task)) {
        return { ...state,
          toDoList: state.toDoList.filter(item => item.id !== action.task.id),
          completedList: [...state.completedList, action.task]
        }
      } else {
        return { ...state,
          completedList: state.completedList.filter(item => item.id !== action.task.id),
          toDoList: [...state.toDoList, action.task]
        }
      }
    }
    case DELETE_COMPLETED: {
      return { ...state,
        completedList: []
      }
    }
    case DRAG_TASK: {
      const { destination, source, draggableId } = action.task;
      const defaultTitle = "ToDo Tasks";
      const completedTitle = "Completed Tasks";
      if (!destination) {
        return state;
      }
      // dropped in the same position
      if (destination.droppableId === source.droppableId && destination.index === source.index) {
        return state;
      }

      if (source.droppableId === defaultTitle && destination.droppableId === defaultTitle) {
        console.log('nothing to change');
      } else if (source.droppableId === completedTitle && destination.droppableId === completedTitle) {
        console.log('nothing to change');
      } else if (source.droppableId === defaultTitle && destination.droppableId === completedTitle) {
        console.log('done');
      } else {
        console.log('back');
      }
    }
    default:
      return state;
  }
};

export default toDoApp;