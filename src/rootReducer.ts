type TInitialState = { check: number };
type TAction = { type: string; payload: any };

const initialState: TInitialState = {
  check: 0,
};

export const rootReducer = (state = initialState, action: TAction) => {
  console.log(action);
  switch(action.type) {
    case 'ADD':
      return {...state, check: state.check + 1}
    default:
      return state;
  }
}