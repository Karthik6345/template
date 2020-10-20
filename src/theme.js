import { createMuiTheme } from '@material-ui/core/styles';
import DMSans from './common/assets/Fonts/DM_Sans/DMSans-Medium.ttf'
import {Switch} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00c65c',
    },
    secondary: {
        main: '#fff',
      }
  },
  typography:{
    fontFamily: "MyWebFont"

  },
  spacing: factor => `${0.625 * factor}rem`, // (Bootstrap strategy)
  overrides: {
    MuiPaper : {
        elevation4 : {
            boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.15)'
        }
    },
    MuiTypography : {
        root : {
            fontFamily : DMSans,
            color : '#2c2c2c'
        },
        subtitle2 : {
         fontSize : 12,
         lineHeight :  1.5,
         fontWeight : "bold",
         letterSpacing: "normal"
        }
        },
      MuiAppBar : {
          root : {
              backgroundColor : '#000',
          }
      },
      MuiButton : {
          root : {
              borderRadius : 5
          }
      },
      MuiOutlinedInput : {
          root : {
            borderRadius : '15px'
     },
        input : {
            padding : 12.5,
            width : '100%',
            fontSize : 12
        },
        notchedOutline : {
            borderColor : '#564b47',    
        },
        inputAdornedStart :{
          paddingLeft : '0px'
        }
     
      }
  }
});

// =====================customised Components ===========================================
 export const AntSwitch = withStyles((theme) => ({
  root: {
    width: 30,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: '#564b47',
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid #564b47`,
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

// export default {theme, AntSwitch }