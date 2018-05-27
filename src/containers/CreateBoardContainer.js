import { connect } from 'react-redux';
import { addBoard } from '../actions/boardActions';
import CreateBoardForm from '../components/CreateBoardForm';

const mapDispatchToProps = dispatch => ({
  addBoard(name) {
    dispatch(addBoard(name));
  }
});

export default connect(null, mapDispatchToProps)(CreateBoardForm);