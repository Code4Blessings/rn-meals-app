import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import colors from '../constants/colors';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';

const MealsNavigator = createStackNavigator({
    Categories: {
        screen:CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Categories',
        }
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
        navigationOptions: (navigationData) => {
           const categoryId = navigationData.navigation.getParam('categoryId')

           const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);

           return {
               headerTitle: selectedCategory.title,
           }
        },
    },
    MealDetail: {
        screen: MealDetailsScreen,
        navigationOptions: (navigationData) => {
            const mealId = navigationData.navigation.getParam('mealId')

            const selectedmeal = MEALS.find(meal => meal.id === mealId);

            return {
                headerTitle: selectedmeal.title,
                headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title='Favorite' iconName='ios-star' onPress={() => {
                        console.log('Mark as favorite')
                    }} />
                </HeaderButtons>
            }

        }
    }

}, {
    defaultNavigationOptions: {
        headerStyle: {
                backgroundColor: colors.accentColor,
                height: 100,
        },
        headerTitleStyle: {
            fontSize: 22,
            letterSpacing: 1
        },
         headerTintColor: 'white'
    }
});

export default createAppContainer(MealsNavigator);