import {TOGGLE_THEME} from '../actions/user-settings';

const initalState = {
  // Defaults to false (dark mode) since upon first load `theme` is undefined
  lightTheme: window.localStorage.getItem('theme') === 'light'
};

export default function (state = initalState, action) {
  switch (action.type) {
    case TOGGLE_THEME.type:
      window.localStorage.setItem('theme', state.lightTheme ? 'dark' : 'light');

      return {
        lightTheme: !state.lightTheme
      };
    default:
      return state;
  }
}
