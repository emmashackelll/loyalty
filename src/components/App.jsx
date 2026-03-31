import Loyalty from './Loyalty';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Loyalty />
        </SafeAreaView>
      </PaperProvider>
    </SafeAreaProvider>
  );
}