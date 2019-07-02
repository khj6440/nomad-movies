import {createBottomTabNavigator,createAppContainer} from "react-navigation";
import MovieScreen from "../screens/Movies";
import TVScreen from "../screens/TV";
import SearchScreen from "../screens/Search";
import { BG_COLOR } from "../constants/Colors";

const TabNavigation = createBottomTabNavigator(
    {
        Movies : {
            screen : MovieScreen,
            navigationOptions:{
                title : 'Something else'
            }
        }, //MovieScreen same MovieScreen : MovieScreen
        TV: TVScreen,
        Search : SearchScreen
    },
    {
        
        tabBarOptions:{
            style:{
                backgroundColor: BG_COLOR
            }
        }
    }
);

//리엑트 네비게이션에게 애플리케이션이 여기있다고 말해주려고
export default createAppContainer(TabNavigation);