import { Slot } from 'expo-router'
import { Header } from 'react-native/Libraries/NewAppScreen'

export default function HomeLayout() {
  return(
    <>
      <Header />
      <Slot />
      <Footer />
    </>
  )
}