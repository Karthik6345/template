import { List, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import Scrollbars from 'react-custom-scrollbars'
import  './RecipeHeaderLink.scss'

export default function RecipeHeaderLink() {
    return (
        <Scrollbars
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        autoHeight
        thumbMinSize={30}
        universal={true}>
      <List className="nav-recipe" disablePadding  component="nav"
      aria-labelledby="navigation-link">
     
          <ListItem component="li">
              <ListItemText>Featured</ListItemText>
          </ListItem>
          <ListItem component="li">
              <ListItemText>Trending Recipes</ListItemText>
          </ListItem>
          <ListItem component="li">
              <ListItemText>Nutritional facts</ListItemText>
          </ListItem>
 </List>
      </Scrollbars>

    )
}
