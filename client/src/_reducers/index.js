import { combineReducers} from 'redux';
import user from './user_reducer';

//redux 데이터 flow
//action -> reducer -> store--(subscribe)-->react component ---(dispatch acition)--> action
//action은 객체에 무슨일이 일어났는지 설명


//reducer은 어플리케이션의 상태 변화를 묘사해주는 function
//이전state와 action object를 받은 후에 nextstate를 return


//combine Reducer
//Store에 존재하는 여러 Reducer들을 Root Reducer에서 하나로 통합 
const rootReducer = combineReducers({
    user
})

export default rootReducer;