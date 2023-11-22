import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <View>
      <Text testID="countText">Count: {count}</Text>
      <Button title="Increment" onPress={increment} />
    </View>
  );
};

export default MyComponent;
