import React from 'react'
import { Grid, Container, Typography, Box } from '@material-ui/core'
import t1recipe from '../../assets/images/t1-recipe.png'
import t2recipe from '../../assets/images/t2-recipe.png'
// import Rating from '@material-ui/lab/Rating';
import { useTheme } from '@material-ui/core/styles';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';



export default function PupularRecipes() {
    const theme = useTheme();
    const [value, setValue] = React.useState(2);

    return (
        <section className="gray-section">
            <Container>
                <Grid
                    container justify="space-between"
                    alignItems="center">
                    <Grid item>
                        <Typography className="gobal-title" variant="h4">Popular Recipes</Typography>
                    </Grid>
                </Grid>
                <Grid container>
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
                                    <div>
                                    {/* <Box component="fieldset" mb={3} borderColor="transparent">
                                        <Typography component="legend">Controlled</Typography>
                                        <Rating
                                            name="simple-controlled"
                                            value={value}
                                            onChange={(event, newValue) => {
                                                setValue(newValue);
                                            }}
                                        />
                                    </Box> */}
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
