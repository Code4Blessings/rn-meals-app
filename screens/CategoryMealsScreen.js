import React from 'react';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';

const CategoryMealsScreen = props => {
    

    const catId = props.navigation.getParam('categoryId');

    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const displayedMeals = availableMeals.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

export default CategoryMealsScreen;
