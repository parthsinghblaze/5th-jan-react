import { CHANGE_NAME, TOGGLE_IMAGE, OPEN_MODAL, CLOSE_MODAL } from "./action";

export function reducer(state, action) {
  if (action.type === CHANGE_NAME) {
    return { ...state, userName: "Varun" };
  }

  if (action.type === TOGGLE_IMAGE) {
    return { ...state, isImageShowing: !state.isImageShowing };
  }

  if (action.type === OPEN_MODAL) {
    return { ...state, isModalShowing: true };
  }

  if (action.type === CLOSE_MODAL) {
    return { ...state, isModalShowing: false };
  }
  return state;
}
