import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const CategoryMealsScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>Category Meals Screen</Text>
            <Button title='Go to Meal Details' onPress={() => {
                props.navigation.navigate('MealDetail');
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {flex: 1, justifyContent: 'center', alignItems: 'center'}
});


export default CategoryMealsScreen;
