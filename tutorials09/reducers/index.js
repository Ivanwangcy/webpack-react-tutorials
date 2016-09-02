export default function counter(state = 0, action){
  switch(action.type){
    case 'INCREMENT':
      state += 1 ; break;
    case 'DECREMENT':
      state -= 1 ; break;
  }

  return state;
}
