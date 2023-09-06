import React, { useEffect, useState } from 'react'
import { FlatList, View, Text } from 'react-native';
export default function Detail() {
    const [data, setData] = useState([]);
    useEffect(() => {
        // Fetch data from your API here
        fetch(' https://jsonplaceholder.typicode.com/posts')
          .then((response) => response.json())
          .then((responseData) => {
            setData(responseData);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
             <Text>title</Text>
            <Text>{item.title}</Text>
            <Text>body:</Text>
            <Text>{item.body}</Text>
            {/* Render other item data */}
          </View>
        )}
      />
    </View>
  )
}
