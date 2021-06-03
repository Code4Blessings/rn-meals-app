import React from 'react';
import { Platform, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import colors from '../constants/colors';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';


const defaultStackNavOptions = {
        headerStyle: {
                backgroundColor: Platform.OS === 'android' ? colors.accentColor : '',
                height: 90,
        },
        headerTitleStyle: {
            fontFamily: 'open-sans',
            fontSize: 22,
            letterSpacing: 1
        },
         headerTintColor: Platform.OS == 'android' ? 'white' : colors.primaryColor
    }

const MealsNavigator = createStackNavigator({
    Categories: {
        screen:CategoriesScreen,
        navigationOptions: (navData) => {
            return {
                headerTitle: 'Meal Categories',
                headerLeft: (
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item title='Menu' iconName='ios-menu' onPress={() => {
                            navData.navigation.toggleDrawer();
                        }} />
                    </HeaderButtons>
                )
            }
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
        navigationOptions: (navigationData) => {
            return {
                headerTitle: 'Your Favorites',
                headerLeft: (
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item title='Menu' iconName='ios-menu' onPress={() => {
                            navigationData.navigation.toggleDrawer();
                        }} />
                    </HeaderButtons>
                )
            }
            
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
        labelStyle:{
            fontFamily: 'open-sans-bold'
        },
        activeTintColor: colors.accentColor
    }
});

const FiltersNavigator = createStackNavigator({
    Filters: {
        screen: FiltersScreen,
        navigationOptions: (navData) => {
            return {
                headerTitle: 'Filter Meals',
                headerLeft: (
                   <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item title='Menu' iconName='ios-menu' onPress={() => {
                            navData.navigation.toggleDrawer();
                        }} />
                    </HeaderButtons>
                )
            }
        } 
    }
}, {
     defaultNavigationOptions: defaultStackNavOptions
});

const MainNavigator = createDrawerNavigator({
  MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
          drawerLabel: 'Meals'
      }
    },
  Filters: {
      screen: FiltersNavigator
      
  }  
}, {
    contentOptions: {
        activeTintColor: colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
})

export default createAppContainer(MainNavigator);