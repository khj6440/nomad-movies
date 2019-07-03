import {createStackNavigator} from "react-navigation";
import { BG_COLOR, TINT_COLOR } from "../constants/Colors";
export const createStack = (screen, title) =>
  createStackNavigator({
    //이름내 마음대로
    Mine: {
      screen: screen,
      navigationOptions: {
        title: title,
        ...headerStyles
      }
    }
  });

export const headerStyles = {
    headerStyle:{
        backgroundColor:BG_COLOR,
        borderBottomWidth:0
    },
    headerTitleStyle:{
        color:TINT_COLOR
    },
    headerTintColor:TINT_COLOR
};