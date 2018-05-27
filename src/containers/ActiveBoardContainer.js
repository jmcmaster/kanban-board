import { connect } from 'react-redux';
import Board from '../components/Board';

const mapStateToProps = ({ boards }, ownProps) => {
  return {
    board: boards[ownProps.id]
  };
};

export default connect(mapStateToProps)(Board);