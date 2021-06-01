import './recipes.css';
import React from 'react';
import RecipeCard from '../recipe-card/recipe-card';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
SwiperCore.use([Pagination, Navigation]);

type Props = { recipes: Recipe[]; addedItemIds: Set<IngredientId> };

const Recipes: React.FC<Props> = ({ recipes, addedItemIds }) => {
  return (
    <Swiper pagination={true} navigation={true} loop={true}>
      {recipes.map((recipe) => {
        return (
          <SwiperSlide>
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              addedItemIds={addedItemIds}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Recipes;