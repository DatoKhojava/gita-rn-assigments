import {Text, Button} from 'react-native';
import React, {useEffect, useState} from 'react';

export function Counter() {
  const [count, setCount] = useState(0); //initial Value
  const [t, setT] = useState();

  const incrementFunc = () => {
    setT(
      setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000),
    );
  };

  const stopCounter = () => {
    clearInterval(t);
  };

  useEffect(() => {
    // when adding to parent
    console.log('called at mounting time');
  }, []);

  return (
    <>
      <Text> Count: {count} </Text>
      <Button title="Start Increment" onPress={incrementFunc}></Button>
      <Button
        title="Reset to 0"
        onPress={() => {
          setCount(0);
        }}></Button>
      <Button title="Stop Increment" onPress={stopCounter}></Button>
    </>
  );
}
