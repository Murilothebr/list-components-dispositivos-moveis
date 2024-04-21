import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface Item {
  id: number;
  name: string;
}

export default function App(): JSX.Element {
  const initialData: Item[] = [
    { id: 1, name: 'Willey' },
    { id: 2, name: 'Mabel' },
    { id: 3, name: 'Gianina' },
    { id: 4, name: 'Keenan' },
    { id: 5, name: 'Aubry' },
    { id: 6, name: 'Gabie' },
    { id: 7, name: 'Brade' },
    { id: 8, name: 'Janis' },
    { id: 9, name: 'Elston' },
    { id: 10, name: 'Stan' },
  ];

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [data, setData] = useState<Item[]>(initialData);
  const [filteredData, setFilteredData] = useState<Item[]>(initialData);

  const handleSearch = (text: string): void => {
    setSearchQuery(text);
    const filteredItems = initialData.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filteredItems);
  };

  const handleReset = (): void => {
    setSearchQuery('');
    setFilteredData(initialData);
  };

  const renderItem = ({ item }: { item: Item }): JSX.Element => (
    <Text style={styles.item}>{item.name}</Text>
  );

  return (
    <View style={styles.container}>

    <Stack.Screen
        options={{
          title: 'Testando Lista',
          headerStyle: { backgroundColor: "black" },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Search..."
        onChangeText={handleSearch}
        value={searchQuery}
      />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <Button title="Reset" onPress={handleReset} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
