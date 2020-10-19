// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import PropTypes from 'prop-types';
// import Paper from "@material-ui/core/Paper";
// import { Route, Switch } from "react-router-dom";

// const Counter = ({
//   increment,
//   incrementIfOdd,
//   incrementAsync,
//   decrement,
//   counter,
// }) => {
//   const useStyles = makeStyles((theme) => ({
//     root: theme.mixins.gutters({
//       paddingTop: 16,
//       paddingBottom: 16,
//       margin: theme.spacing(3),
//     }),
//   }));
//     const classes = useStyles();
//     return (
//       <Paper  className={classes.root}>
//         Clicked: {counter} times
//         {' '}
//         <Button variant="contained" color="primary" onClick={increment}>+</Button>
//         {' '}
//         <button onClick={decrement}>-</button>
//         {' '}
//         <button onClick={incrementIfOdd}>Increment if odd</button>
//         {' '}
//         <button onClick={() => incrementAsync()}>Increment async</button>
//          <Switch>
//           <Route path="/" exact component={Home} />
//           <Route path="/about" component={About} />
//         </Switch>
//       </Paper>
//     );

//   }

// Counter.propTypes = {
//   increment: PropTypes.func.isRequired,
//   incrementIfOdd: PropTypes.func.isRequired,
//   incrementAsync: PropTypes.func.isRequired,
//   decrement: PropTypes.func.isRequired,
//   counter: PropTypes.number.isRequired,
// };

// export default Counter;


import React from 'react';

const Counter = () => {
  return (
    <div>
      
    </div>
  )
}