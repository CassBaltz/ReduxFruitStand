import {connect} from 'react-redux';
import FruitStand from './fruit_stand';
import * as Actions from './actions';

const mapStateToProps = (state) => ({
  fruit: state.fruit
});

const mapDispatchToProps = (dispatch) => ({
  addOrange: () => dispatch(Actions.addOrange),
  addFruit: (fruit) => dispatch(Actions.addFruit(fruit))
});

export default connect(mapStateToProps, mapDispatchToProps)(FruitStand);
