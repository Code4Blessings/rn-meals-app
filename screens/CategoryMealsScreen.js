import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = props => {
    const renderMealItem = itemData => {
        return <MealItem 
        title={itemData.item.title} 
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity.toUpperCase()} 
        affordability={itemData.item.affordability.toUpperCase()}
        onSelectMeal={()=> {}} 
        />
    }

    const catId = props.navigation.getParam('categoryId');

    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );


    return(
        <View style={styles.screen}>
           <FlatList 
            data={displayedMeals} 
            keyExtractor={(item, index) => item.id} 
            renderItem={renderMealItem}
            style={{width: '100%'}}
           />
        </View>
    );
};


const styles = StyleSheet.create({
    screen: {flex: 1, justifyContent: 'center', alignItems: 'center'}
});


export default CategoryMealsScreen;
