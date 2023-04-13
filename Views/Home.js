import { StyleSheet, View } from "react-native";
import {  Card } from "react-native-paper";
import { DefaultTheme } from "react-native-paper";

export default function Home(){
    return(
        <View style={styles.View}>
            <Card style={styles.Card}>
                <Card.Title title='tela de Home' />
            </Card>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: DefaultTheme.colors.background,
      alignItems: 'center',
      paddingTop: 10
    },
    card: {
      width: '90%'
    }
  });