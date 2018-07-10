const initialState = {
  day: 20,
}

export default function reducer(state = initialState, action) {
  if (action.type === 'UPDATE_DAY') {
    return { ...state, day: action.payload }
  }
  return state;
}

export function updateDay(day) {
  return {
    type: 'UPDATE_DAY',
    payload: day,
  };
}