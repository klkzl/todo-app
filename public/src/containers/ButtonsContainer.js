import { connect } from 'react-redux';
import Buttons from '../components/Buttons';
import { deleteCompleted } from '../actions';

const mapDispatchToProps = {
  deleteCompleted
};

export default connect(null, mapDispatchToProps)(Buttons);