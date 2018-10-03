import {createStackNavigator} from 'react-navigation';
import TopicInfoScreen from './screens/TopicInfoScreen';
import OpinionAddScreen from './screens/OpinionAddScreen';
import HomePageScreen from './screens/HomePage';
import TopicAddScreen from './screens/TopicAddScreen';

const AppNavigator = createStackNavigator({
    HomePageScreen: { screen: HomePageScreen },
	TopicInfoScreen: {screen:TopicInfoScreen},
    OpinionAddScreen: { screen: OpinionAddScreen },
    TopicAddScreen: { screen: TopicAddScreen }
});

export default AppNavigator;