import { Component } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/counter';

// --------------------------------------REDUX TOOLKIT--------------------------------------------
const Counter = () => {
  const dispatch = useDispatch();
  // when we use useSelector the function set up a subscription to the store
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10)); // {type: SOME_UNIQUE_ID, payload:10}
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;

/// -------------------------------------- REDUX CLASSIC---------------------------------
// import { Component } from 'react';
// import { useSelector, useDispatch, connect } from 'react-redux';
// import classes from './Counter.module.css';

// const Counter = () => {
//   const dispatch = useDispatch();
//   // when we use useSelector the function set up a subscription to the store
//   const counter = useSelector((state) => state.counter);
//   const show = useSelector((state) => state.showCounter);

//   const incrementHandler = () => {
//     dispatch({ type: 'increment' });
//   };
//   const decrementHandler = () => {
//     dispatch({ type: 'decrement' });
//   };

//   const increaseHandler = () => {
//     dispatch({ type: 'increase', amount: 5 });
//   };

//   const toggleCounterHandler = () => {
//     dispatch({ type: 'toggle' });
//   };

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       {show && <div className={classes.value}>{counter}</div>}
//       <div>
//         <button onClick={incrementHandler}>Increment</button>
//         <button onClick={increaseHandler}>Increase by 5</button>
//         <button onClick={decrementHandler}>Decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };
// export default Counter;

// ----------------------------- REDUX CLASS COMPONENTS----------------------------------
// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>
//           Toggle Counter
//         </button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
