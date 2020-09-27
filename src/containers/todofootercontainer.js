import TodoFooter from "../components/footerFilter";
import { connect } from "react-redux";
import { filterTodo } from "../actions/index";

const mapStateToProps = (state, ownProps) => {
  return {
    activeFilter: state.setFilter,
  };
};
export default connect(mapStateToProps, { filterTodo })(TodoFooter);
