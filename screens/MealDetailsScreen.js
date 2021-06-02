import React from 'react';
import { Text, View, StyleSheet, Button, Image, ScrollView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const MealDetailsScreen = props => {
    const mealId = props.navigation.getParam('mealId');

     const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.complexity}</DefaultText>
                <DefaultText>{selectedMeal.affordability}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => <Text key={ingredient}>{ingredient}</Text>)}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => <Text key={step}>{step}</Text>)}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    image: {width: '100%', height: 200},
    details: { flexDirection: 'row', padding: 15, justifyContent: "space-around"},
    title: {fontFamily: 'open-sans-bold', fontSize: 22, textAlign: 'center'}
});

export default MealDetailsScreen;