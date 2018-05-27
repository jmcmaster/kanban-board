import { connect } from 'react-redux';
import Boards from '../components/Boards';

const mapStateToProps = ({ boards }) => {
  return {
    boards
  };
};

export default connect(mapStateToProps)(Boards);