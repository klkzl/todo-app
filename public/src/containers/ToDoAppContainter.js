import { connect } from 'react-redux';
import ToDoApp from '../components/ToDoApp';
import { addTask, deleteTask, toggleTask, dragTask } from '../actions';

const mapStateToProps = state => ({
  toDoList: state.toDoApp.toDoList,
  completedList: state.toDoApp.completedList
});

const mapDispatchToProps = {
  addTask, deleteTask, toggleTask, dragTask
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoApp);