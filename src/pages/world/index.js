import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import newImage from '../../../assets/news-image.jpg'
import worldImage from '../../../assets/world-image.jpg'

import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from 'expo-linear-gradient'

export function World() {
  const navigation = useNavigation()

  function handleNavigate() {
    navigation.navigate('Popular')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fique por dentro</Text>
      <Text style={styles.title}>do mundo cripto!</Text>

      <View style={styles.cards}>
        <TouchableOpacity style={styles.content} activeOpacity={0.7} onPress={handleNavigate}>
          <Image source={newImage} style={styles.images} />
          <Text style={styles.text}>Últimas notícias</Text>
          <LinearGradient
            style={styles.gradient}
            colors={['transparent', 'rgba(0, 0, 0, 0.70)', 'rgba(0, 0, 0, 0.95)']}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.content} activeOpacity={0.7} onPress={handleNavigate}>
          <Image source={worldImage} style={styles.images} />
          <Text style={styles.text}>Criptos populares</Text>
          <LinearGradient
            style={styles.gradient}
            colors={['transparent', 'rgba(0, 0, 0, 0.70)', 'rgba(0, 0, 0, 0.95)']}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03051E',
    paddingTop: '10%',
    paddingLeft: '10%'
  },
  cards: {
    marginTop: 14,
    gap: 20
  },
  title: {
    color: '#FFD369',
    fontSize: 26,
    fontWeight: 'bold',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 20,
    left: 20,
    zIndex: 99
  },
  content: {
    borderWidth: .5,
    borderColor: 'rgba(204, 204, 204, 0.6)',
    borderRadius: 14,
    height: 150,
    width: '90%'
  },
  images: {
    width: '100%',
    height: '100%',
    borderRadius: 14
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '45%',
    borderRadius: 14,
    zIndex: 1,
    backgroundColor: 'transparent'
  }
})