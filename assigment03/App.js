import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from 'react-native';

const windowHeight = Dimensions.get('window').height;

const App = () => {
  const [colorList, setColorList] = useState([
    {
      id: 1,
      color: 'red',
    },
  ]);

  const [colors, setColors] = useState([
    {
      id: 1,
      colorName: 'red',
    },
    {
      id: 2,
      colorName: '#e33231',
    },
    {
      id: 5,
      colorName: '#221313',
    },
    {
      id: 6,
      colorName: '#a33442',
    },
    {
      id: 7,
      colorName: '#887722',
    },
    {
      id: 8,
      colorName: '#bcae21',
    },
  ]);

  const handlePress = clr => {
    let id = (Math.random().toString(36) + '00000000000000000').slice(2, 7);
    setColorList([...colorList, {id: id + 3, color: clr}]);
  };

  const handleRemove = id => {
    let rmwitm = colorList.filter(item => item.id != id);
    setColorList([...rmwitm]);
    console.log(rmwitm);
  };

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#333" />
      <View style={styles.ScrolledView}>
        <ScrollView>
          <View>
            {colorList.map(items => {
              return (
                <View style={{flex: 1, flexDirection: 'row'}} key={items.id}>
                  <View
                    style={{
                      backgroundColor: items.color,
                      width: 350,
                      height: 30,
                      margin: 10,
                    }}
                  />
                  <TouchableOpacity onPress={() => handleRemove(items.id)}>
                    <Text style={{marginTop: 15}}>X</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        {colors.map(({id, colorName}) => {
          return (
            <TouchableOpacity
              key={id}
              style={{
                backgroundColor: colorName,
                width: 50,
                height: 50,
                margin: 10,
                borderRadius: 50,
              }}
              onPress={() => handlePress(colorName)}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ScrolledView: {
    height: windowHeight - 70,
    backgroundColor: 'powderblue',
  },
});

export default App;
