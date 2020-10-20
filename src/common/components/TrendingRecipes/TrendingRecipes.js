import React from 'react'
import { Grid, Container, Typography, Card, CardMedia, CardContent,  } from '@material-ui/core'
import t1recipe from '../../assets/images/t1-recipe.png'
import t2recipe from '../../assets/images/t2-recipe.png'

import { makeStyles, useTheme } from '@material-ui/core/styles';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';



export default function TrendingRecipes() {
    const theme = useTheme();

    return (
        <section className="gray-section">
            <Container>
                <Grid
                    container justify="space-between"
                    alignItems="center">
                    <Grid item>
                        <Typography className="gobal-title" variant="h4">Trending Recipes</Typography>
                    </Grid>
                </Grid>
                <Grid  container>
                    <Grid item>
                        <>
                            <div className="card-recipe">
                                <div className="card-recipe__imageContainer">
                                    <img
                                        className="card-recipe__image"
                                        src={t1recipe}
                                        title="Live from space album cover"
                                    />
                                    <div className="card-recipe__content">
                                        <Typography component="h5" variant="subtitle1">
                                            Beans and Garlic Toast in Broth
          </Typography>
                                        <Typography className="duration">
                                            <span className="watch-icon"> <WatchLaterOutlinedIcon /></span> 30min</Typography>

                                    </div>

                                </div>

                            </div>
                        </>
                    </Grid>
                    <Grid item>
                        <>
                            <div className="card-recipe">
                                <div className="card-recipe__imageContainer">
                                    <img
                                        className="card-recipe__image"
                                        src={t2recipe}
                                        title="Live from space album cover"
                                    />
                                    <div className="card-recipe__content">
                                        <Typography component="h5" variant="subtitle1">
                                        Wrapping a pudding for steaming
                                        </Typography>
                                        <Typography className="duration">
                                            <span className="watch-icon"> <WatchLaterOutlinedIcon /></span> 30min</Typography>

                                    </div>

                                </div>

                            </div>
                        </>
                    </Grid>
                    <Grid item>
                        <>
                            <div className="card-recipe">
                                <div className="card-recipe__imageContainer">
                                    <img
                                        className="card-recipe__image"
                                        src={t1recipe}
                                        title="Live from space album cover"
                                    />
                                    <div className="card-recipe__content">
                                        <Typography component="h5" variant="subtitle1">
                                            Beans and Garlic Toast in Broth
          </Typography>
                                        <Typography className="duration">
                                            <span className="watch-icon"> <WatchLaterOutlinedIcon /></span> 30min</Typography>

                                    </div>

                                </div>

                            </div>
                        </>
                    </Grid>
                    <Grid item>
                        <>
                            <div className="card-recipe">
                                <div className="card-recipe__imageContainer">
                                    <img
                                        className="card-recipe__image"
                                        src={t1recipe}
                                        title="Live from space album cover"
                                    />
                                    <div className="card-recipe__content">
                                        <Typography component="h5" variant="subtitle1">
                                            Beans and Garlic Toast in Broth
          </Typography>
                                        <Typography className="duration">
                                            <span className="watch-icon"> <WatchLaterOutlinedIcon /></span> 30min</Typography>

                                    </div>

                                </div>

                            </div>
                        </>
                    </Grid>
                    <Grid item>
                        <>
                            <div className="card-recipe">
                                <div className="card-recipe__imageContainer">
                                    <img
                                        className="card-recipe__image"
                                        src={t1recipe}
                                        title="Live from space album cover"
                                    />
                                    <div className="card-recipe__content">
                                        <Typography component="h5" variant="subtitle1">
                                            Beans and Garlic Toast in Broth
          </Typography>
                                        <Typography className="duration">
                                            <span className="watch-icon"> <WatchLaterOutlinedIcon /></span> 30min</Typography>

                                    </div>

                                </div>

                            </div>
                        </>
                    </Grid>
                </Grid>
                
            </Container>
        </section>
    )
}
