import { ADD_TASK, DELETE_TASK, TOGGLE_TASK, DELETE_COMPLETED, DRAG_AND_DROP } from '../actions';
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
    case DRAG_AND_DROP: {
      console.log(action.task);
    }
    default:
      return state;
  }
};

export default toDoApp;