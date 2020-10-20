import React from 'react'
import Advertisement from '../Advertisement/Advertisement'
import SearchRecipe from '../SearchRecipe/SearchRecipe'
import ExploreByCategory from '../ExploreByCategory/ExploreByCategory'
import { Scrollbars } from 'react-custom-scrollbars';
import TrendingRecipes from '../TrendingRecipes/TrendingRecipes';
import RecipeHeaderLink from '../RecipeHeaderLink/RecipeHeaderLink';
import FeaturedRecipe from '../FeaturedRecipe/FeaturedRecipe';
// import PopularRecipes from '../../Components/PopularRecipes/PopularRecipes';
import PopularRecipes from '../PopularRecipes/PopularRecipes'
import Aids from '../../assets/images/aidsScreen.PNG'
import Aids2 from '../../assets/images/aidsScreen2.PNG'


const Home = () => {
    return (
        <>
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
                <RecipeHeaderLink />
                <Advertisement src={Aids} />

                <SearchRecipe />
                <FeaturedRecipe />
                <ExploreByCategory />
                <TrendingRecipes />
                <Advertisement src={Aids2} />
                {/* <PopularRecipes/> */}
                {/* <PopularRecipes /> */}
                <PopularRecipes />

            </Scrollbars>
        </>
    )
}

export default Home;
