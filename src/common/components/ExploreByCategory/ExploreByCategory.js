import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './ExploreByCategory.scss'
import { Container, Typography } from '@material-ui/core';
import bitmap from '../../assets/images/bitmap.jpg'
import c1recipe from '../../assets/images/c1-recipe.jpg'
import { AntSwitch } from '../../../theme';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: "138px",
    borderRadius: "15px",
    boxShadow: "0 3px 5px 0 rgba(0, 0, 0, 0.16)",
    backgroundColor: "#ffffff",
    textAlign: "center",
    fontSize: '0.75rem',
    fontWeight: "bold",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "7px",
    paddingRight: "7px",
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function ExploreByCategory() {
  // const [state, setState] = React.useState({
  //   checkedA: true,
  //   checkedB: true,
  // });
  const [state, setState] = React.useState({
    checkedC: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  console.log(bitmap)
  const classes = useStyles();
  return (

    <section style={{paddingBottom : "10px"}}>
      <Container>
        <Grid
          container justify="space-between"
          alignItems="center">
          <Grid item>
            <Typography className="gobal-title" variant="h4">Explore by category</Typography>
          </Grid>
          <Grid item className="toggle-button">
            <Typography component="div">
              <Grid component="label" container alignItems="center">
                <Grid item className="toggle-button__style">
                  <AntSwitch checked={state.checkedC} onChange={handleChange} name="checkedC" />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2">only veg </Typography></Grid>
              </Grid>
            </Typography>
          </Grid>
        </Grid>
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          autoHeight
          autoHeightMin={158}
          autowidthmax={200}
          thumbMinSize={30}
          universal={true}
        >
          <Grid component="div" className="nowrap recipe-container" container>
            <Grid item sm={3}>
              <Paper className={classes.paper}>
                <img src={bitmap} alt="recipe" />
                <Typography className="recipe-container__tilte" variant="subtitle2">Healty Recipes</Typography>
              </Paper>
            </Grid>
            <Grid item sm={3}>
              <Paper className={classes.paper}>
                <img src={c1recipe} alt="recipe" />
                <Typography className="recipe-container__tilte" variant="subtitle2">Breakfast Recipes</Typography>
              </Paper>
            </Grid>
            <Grid item sm={3}>
              <Paper className={classes.paper}>
                <img src={bitmap} alt="recipe" />
                <Typography className="recipe-container__tilte" variant="subtitle2">Salad Recipes</Typography>
              </Paper>
            </Grid>
            <Grid item sm={3}>
              <Paper className={classes.paper}>
                <img src={bitmap} alt="recipe" />
                <Typography className="recipe-container__tilte" variant="subtitle2">Seasonal Recipes</Typography>
              </Paper>
            </Grid>

          </Grid>
        </Scrollbars>

      </Container>
    </section>

  )
}
