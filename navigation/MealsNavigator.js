import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import colors from '../constants/colors';

const MealsNavigator = createStackNavigator({
    Categories: {
        screen:CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Categories',
            headerStyle: {
                backgroundColor: colors.accentColor
            },
            //headerTintColor: 'white'
        }
    },
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailsScreen,

});

export default createAppContainer(MealsNavigator);