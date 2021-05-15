import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import colors from '../constants/colors';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import FavoritesScreen from '../screens/FavoritesScreen';

const defaultStackNavOptions = {
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
    defaultNavigationOptions: defaultStackNavOptions
});

const FavNavigator = createStackNavigator({
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions: {
            headerTitle: 'Your Favorites'
        }
    },
    MealDetail: MealDetailsScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
});

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator, 
        navigationOptions: {
            tabBarIcon:(tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            }
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon:(tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            }
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: colors.accentColor
    }
});

export default createAppContainer(MealsFavTabNavigator);