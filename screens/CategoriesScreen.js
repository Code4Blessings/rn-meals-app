import React from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
//import CategoryMealsScreen from './CategoryMealsScreen';


const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
    return (
        <TouchableOpacity style={styles.gridItems} onPress={() => {
           props.navigation.navigate({
               routeName: 'CategoryMeals', 
            params: {
               categoryId: itemData.item.id
           }}) 
        }}>
            <View>
                <Text>{itemData.item.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

    return(
        <FlatList
            keyExtractor = {(item, index) => item.id} 
            data={CATEGORIES} 
            renderItem={renderGridItem} 
            numColumns={2} 
        />
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories'
};


const styles = StyleSheet.create({
    screen: {flex: 1, justifyContent: 'center', alignItems: 'center'},
    gridItems: {flex: 1, margin: 15, height: 125}
});

export default CategoriesScreen;
