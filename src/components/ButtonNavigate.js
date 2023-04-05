import * as React from 'react';
import { BottomNavigation, Text } from "react-native-paper";


const HomeRoute = <Text>Home</Text>

const MyComponent = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key:'Home', title:'Home', icon:'Home'},
    ]);
    
    const renderScene = BottomNavigation.SceneMap({
        Home: HomeRoute
    })
    return(
        <BottomNavigation 
        navigationState={{index,routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
        />
    );
};

export default MyComponent