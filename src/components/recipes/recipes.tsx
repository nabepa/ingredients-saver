import './recipes.css';
import React, { memo } from 'react';
import RecipeCard from '../recipe-card/recipe-card';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
SwiperCore.use([Pagination, Navigation]);

type Props = {
  recipes: Recipe[];
  recipesInfo: RecipesInfo;
  addedItemIds: Set<IngredientId>;
  selectedItemIds: Set<IngredientId>;
};

const Recipes: React.FC<Props> = memo(
  ({ recipes, recipesInfo, addedItemIds, selectedItemIds }) => {
    return (
      <Swiper
        className='mySwiper'
        pagination={true}
        navigation={true}
        loop={true}
      >
        {recipes.map((recipe) => {
          return (
            <SwiperSlide>
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                recipeInfo={recipesInfo[recipe.id]}
                addedItemIds={addedItemIds}
                selectedItemIds={selectedItemIds}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }
);

export default Recipes;
