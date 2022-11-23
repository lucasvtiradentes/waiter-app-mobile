import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Main } from './src/components/Main';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export default function App() {
  const [isFrontsLoaded] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf'),
  });

  if (!isFrontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <Main />
    </>
  );
}
