import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';
// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native';
import { ApiProvider } from './context/ApiContext';

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true
  }
});

function App(): any {

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();



  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ApiProvider>
          <Navigation colorScheme={colorScheme} />
        </ApiProvider>
      </SafeAreaProvider>
    );
  }
}
export default withAuthenticator(App);
