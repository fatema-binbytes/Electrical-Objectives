import {NavigationActions} from 'react-navigation';

class Route {
  reset(nav, routeName) {
    nav.dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: routeName})],
      }),
    );
  }

  back(nav, routeName = null) {
    nav.dispatch(
      NavigationActions.back({
        key: routeName,
      }),
    );
  }
}

export default new Route();
