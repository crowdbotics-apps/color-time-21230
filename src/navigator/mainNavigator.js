import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen3132009Navigator from '../features/BlankScreen3132009/navigator';
import BlankScreen2132008Navigator from '../features/BlankScreen2132008/navigator';
import BlankScreen1132007Navigator from '../features/BlankScreen1132007/navigator';
import BlankScreen0132006Navigator from '../features/BlankScreen0132006/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen3132009: { screen: BlankScreen3132009Navigator },
BlankScreen2132008: { screen: BlankScreen2132008Navigator },
BlankScreen1132007: { screen: BlankScreen1132007Navigator },
BlankScreen0132006: { screen: BlankScreen0132006Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
