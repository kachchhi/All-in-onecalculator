import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import SipCalculator from './SipCalculator';

let DrawerNavigator = createDrawerNavigator({
  SipCalculator: {
    screen: SipCalculator,
  },
  LoanCalculator: {
    screen: SipCalculator,
  },
});

let AppContainer = createAppContainer(DrawerNavigator);

export default AppContainer;
