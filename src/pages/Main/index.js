import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const images = [
  { id: 1, source: require('../../assets/Serta.png') },
  { id: 2, source: require('../../assets/matanza.png') },
  { id: 3, source: require('../../assets/super.png') }
];

const otherEvents = [
  { id: 1, source: require('../../assets/Rock.png'), description: 'Evento Rock in Rio na Cidade do Rock', screen: 'Evento01' },
  { id: 2, source: require('../../assets/zeneto.png'), description: 'Zé Neto e Cristiano em Incrível Palco', screen: 'Evento02' }
];

const { width } = Dimensions.get('window'); 

export default function Main() {
  const [currentIndex, setCurrentIndex] = useState(0); 
  const flatListRef = useRef(null); 
  const navigation = useNavigation(); 

  
  const scrollToNext = () => {
    let nextIndex = currentIndex + 1;

   
    if (nextIndex >= images.length) {
      nextIndex = 0;
    }

    setCurrentIndex(nextIndex);

    flatListRef.current?.scrollToIndex({
      index: nextIndex,
      animated: true,
    });
  };

  useEffect(() => {
    const interval = setInterval(scrollToNext, 3000); 

    return () => clearInterval(interval); 
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <View style={styles.containerMain}>
        <Text style={styles.mainEventText}>Principais eventos!</Text>

        <FlatList
          data={images}
          horizontal
          pagingEnabled 
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <Image
                source={item.source}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
          )}
          ref={flatListRef} 
        />
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.title}>Outros eventos.</Text>

        <FlatList
          data={otherEvents}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.id}
              style={styles.otherEventWrapper}
              onPress={() => navigation.navigate(item.screen)} 
            >
              <Image
                source={item.source}
                style={styles.otherEventImage}
                resizeMode="contain"
              />
              <Text style={styles.eventText}>{item.description}</Text> 
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#451776',
  },
  containerMain: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    paddingTop: 20, 
  },
  imageContainer: {
    width: width,  
    height: 200,   
    justifyContent: 'center',
    alignItems: 'center', 
  },
  image: {
    width: '100%', 
    height: '100%', 
  },
  mainEventText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10, 
  },
  containerForm: {
    flex: 4,
    backgroundColor: '#FFF',
    paddingStart: '5%',
    paddingEnd: '5%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop:10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  otherEventsContainer: {
    flexDirection: 'column', 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    width: '100%',
  },
  otherEventWrapper: {
    marginBottom: 20,
    alignItems: 'center',
  },
  otherEventImage: {
    width: '90%', 
    height: 150,  
    marginBottom: 5,  
  },
  eventText: {
    fontSize: 16  ,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center', 
  }
});

