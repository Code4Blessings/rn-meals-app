import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = props => {
    return(
        <FlatList data={CATEGORIES} numColumns={2} />
    );
};

const styles = StyleSheet.create({
    screen: {flex: 1, justifyContent: 'center', alignItems: 'center'}
});

export default CategoriesScreen;
