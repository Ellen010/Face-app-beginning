import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import { UserState } from '../reducers/user';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function GalleryScreen() {
  const user = useSelector((state: { user: UserState }) => state.user.value);

  const photosData: string[] = [
    'https://static.lacapsule.academy/faceup/picture1.jpg',
    'https://static.lacapsule.academy/faceup/picture2.jpg',
    'https://static.lacapsule.academy/faceup/picture3.jpg',
    'https://static.lacapsule.academy/faceup/picture4.jpg',
  ];

  const photos = photosData.map((data: string, i: number) => {
    return (
      <View key={i} style={styles.photoContainer}>
        <FontAwesome name='times' size={20} color='#000000' style={styles.deleteIcon} />
        <Image source={{ uri: data }} style={styles.photo} />
      </View>
    );
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Gallery</Text>
      <Text style={styles.text}>Logged as: {user.email}</Text>

      <ScrollView contentContainerStyle={styles.galleryContainer}>
        {photos}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  galleryContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  photoContainer: {
    alignItems: 'flex-end',
  },
  photo: {
    margin: 10,
    width: 150,
    height: 150,
  },
  title: {
    fontFamily: 'Futura',
    fontSize: 22,
    marginTop: 10,
    marginBottom: 10,
  },
  deleteIcon: {
    marginRight: 10,
  },
  text: {
    marginBottom: 15,
  },
});
