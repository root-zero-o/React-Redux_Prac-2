// 그럼 player는 뭔데?

// 1단계 : 액션 타입 만들기
const ADD_PLAYER = 'player/ADD_PLAYER'; // player를 추가

// 2단계 : 액션 생성함수 만들기
export const addPlayer = (name, position, team) => ({ type: ADD_PLAYER, add : {name, position, team}});

// action은 이렇게 생겼어
// {   type : ADD_PLAYER,
//     add : {
//         name : ,
//         position: ,
//         team : 
//     }
// }

// 3단계 : 초기 상태 선언
const initialState = []; // 배열 안 요소는 객체야! [{}, {},...]

// 4단계 리듀서 선언
export default function player( state = initialState, action ) {
    switch (action.type){
        case ADD_PLAYER:
            return state.concat(action.add); // state는 배열이니까 concat을 사용해서 넣어주자.
                                            // action안에 add라는 배열을 통째로 넣는거지 !!
        default:
            return state;
    }
}