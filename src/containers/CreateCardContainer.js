import { connect } from 'react-redux';
import CreateCardForm from '../components/CreateCardForm';
import { addCard } from '../actions/boardActions';

const mapDispatchToProps = (dispatch, ownProps) => ({
  addCard(name) {
    dispatch(addCard(name, ownProps.list.id, ownProps.board.id));
  }
});

export default connect(null, mapDispatchToProps)(CreateCardForm);