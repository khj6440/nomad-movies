import { createStackNavigator, createAppContainer } from "react-navigation";
import TabNavigation from "./TabNavigation";
import DetailScreen from "../screens/Detail";
import {  headerStyles } from "./config";

const MainNavigation = createStackNavigator(
  {
    Tabs: { screen: TabNavigation, navigationOptions: { header: null } },
    Detail:{
        screen:DetailScreen,
        navigationOptions:{
            ...headerStyles
        }
    }
  },{
      //스택네비게이터에서 변경때만 사용됨
      //일부는 헤더 있고 일부는 없을때
    headerMode:"screen",
    headerBackTitleVisible:false   
  }
);

export default createAppContainer(MainNavigation);
