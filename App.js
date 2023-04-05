
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from "react-native-paper";
import {ButtonNavigate} from './src/components/ButtonNavigate'
export default function App() {
  return (
    <PaperProvider>

    <ButtonNavigate />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
