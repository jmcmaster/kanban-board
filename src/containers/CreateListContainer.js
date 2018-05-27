import { connect } from 'react-redux';
import CreateListForm from '../components/CreateListForm';
import { addList } from '../actions/boardActions';

const mapDispatchToProps = (dispatch, ownProps) => ({
  addList(name) {
    dispatch(addList(name, ownProps.board.id));
  }
});

export default connect(null, mapDispatchToProps)(CreateListForm);