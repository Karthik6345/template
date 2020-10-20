import { CardActionArea, CardMedia } from '@material-ui/core'
import React from 'react'
import {video1} from '../../assets/images/video-1.jpg'

export default function FeaturedRecipe() {
    return (
        <img src={video1}/>

    //    <CardActionArea>
    //        <CardMedia style={{width:"400px", height:"200px"}} image={video1}></CardMedia>
    //    </CardActionArea>
    )
}
