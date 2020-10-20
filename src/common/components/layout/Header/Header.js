import React from 'react';
import './Header.scss';
import { makeStyles } from '@material-ui/core/styles'
import { HamburgerIcon, BellRingIcon, UserIcon, CloseIcon } from '../../../assets/SVG/Index';
import Logo from '../../../assets/images/logo.png';
import { AppBar, Toolbar, IconButton, List, ListItem, SwipeableDrawer, ListItemText } from '@material-ui/core';
import SearchRecipe from '../../SearchRecipe/SearchRecipe';
import { Scrollbars } from 'react-custom-scrollbars';


const useStyles = makeStyles({
  fullList: {
    width: 'auto',
  },
});


export default function Header() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };


  const list = (anchor) => (
    <div
      className="listItemStyle"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="menu-search">
        <IconButton className="closeBtn">
          <CloseIcon />
        </IconButton>
        <SearchRecipe />
      </div>
      <Scrollbars
                autoHide
                autoHideTimeout={1000}
                autoHideDuration={200}
                autoHeight
                autoHeightMin={600}
                autoHeightMax={600}
                thumbMinSize={30}
                universal={true}
            >
      <List className="menu-link">
        {["All Categories",
          "Trending Recipes",
          "Popular Collections",
          "Popular Recipes",
          "Dietitian to follow",
          "Top Fodies to follow",
          "Master the Basics (Kitchen Tips)",
          "Dishes you can try this Diwali",
          "Immunity Booster Recipes"].map((text, index) => (
            <ListItem component="li" button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
      </List>

      <List component="section" className="gray-section menu-link">
        {["About Us",
        "Press",
        "Support",
        "Advertise",
        "Sitemap",
        "Privacy policy"].map((text, index) => (
          <ListItem component="li" button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      </Scrollbars>
    </div>
  );



  return (
    <>
      <AppBar color="secondary" position="static" className="t-header">
        <Toolbar>
          <IconButton onClick={toggleDrawer('left', true)} edge="start" color="default" aria-label="menu">
            <HamburgerIcon />
          </IconButton>
          <div style={{ marginLeft: "8px", display: "flex" }}>
            <img src={Logo} alt="logo" />
          </div>
          <IconButton style={{ marginLeft: 'auto' }}>
            <BellRingIcon />
          </IconButton>
          <IconButton>
            <UserIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <div>

        <SwipeableDrawer
          className="main-drawer"
          open={state["left"]}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </div>
    </>
  )
}
