import { StatusBar, SafeAreaView, Text, View } from 'react-native';

//loading (deprecated)
// expo-app-loading is deprecated in favor of expo-splash-screen: use SplashScreen.preventAutoHideAsync() and SplashScreen.hideAsync() instead.
import AppLoading from 'expo-app-loading';

// Fontes
import { 
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

// Componentes criados
import Cesta from './src/telas/cesta/';

// Mocks de dados
import mock from './src/mocks/cesta';

export default function App() {

  // Carregando fontes
  const [fontesCarregadas] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  // Verificando se as fontes foram carregadas
  if(!fontesCarregadas){
    return <AppLoading/>
  }

  return (
    // flex: 1 para ocupar toda a tela
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar/>
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}