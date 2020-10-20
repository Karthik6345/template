import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {SearchIcon} from './../../assets/SVG/Index';
import { Box, Container, Grid, Paper } from '@material-ui/core';
import './SearchRecipe.scss'
// const useStyles = makeStyles((theme) => ({

// }));

export default function SearchRecipe() {

  const searchWwrapper = {
    padding : '15px 20px'
  }



    return (
 <Container>
     <Grid className="wrapper" item xs={12}>
        <FormControl
        fullWidth={true}
         variant="outlined">
          <OutlinedInput
            fullWidth={true}
            id="outlined-adornment-weight"
            value=""
            placeholder="Search recipe, ingredient, dish…"
            startAdornment={<InputAdornment position="start">
              <IconButton disableRipple={true} style={{padding : '0'}}><SearchIcon/></IconButton></InputAdornment>}
            aria-describedby="Search-recipe"
            inputProps={{
              'aria-label': 'Search recipe, ingredient, dish…',
            }}
            labelWidth={0}
          />
        </FormControl>
        </Grid>
        </Container>

    )
}
