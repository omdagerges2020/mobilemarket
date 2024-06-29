import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
  const navigate = useNavigation()
  return (
    <View>
      <Text>Profile</Text>
      <Button onPress={()=> navigate.navigate("Startup")}>Sign out</Button>
    </View>
  )
}

export default Profile