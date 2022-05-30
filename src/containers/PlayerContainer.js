// 그럼 player라는 리듀서를 어떻게 쓸건데?

import React, { useRef } from "react"; // 일단 input에서 입력한 값을 가져와야 하니까 useRef를 쓰자

import { useSelector, useDispatch } from 'react-redux'; // useSelector로 state값을 가져오고
                                                        // useDispatch로 action을 실행할거야
import Player from '../components/Player'; // 바뀐 state 값은 Player에 props로 담아서 표시해줄거고

import { addPlayer } from '../redux/modules/player'; // action을 실행하려면 action 생성함수도 가져와야지

function PlayerContainer() {

    const  playerList  = useSelector(state => (state.player)); // 아까 state는 [{},{},..] 형태의 배열이었지
                                                                // 특히 player에 의해 바뀌었으니까 state.player   
    const nameInput = useRef(null); 
    const positionInput = useRef(null);
    const teamInput = useRef(null); // useRef로 DOM 요소를 가져오자. 세 개의 값이 다 다르니까 세 개를 만들어줘

    const dispatch = useDispatch(); // 그리고 dispatch를 사용해서 action을 실행하자

    const onAddPlayer = () => {dispatch(addPlayer(nameInput.current.value, positionInput.current.value, teamInput.current.value))};
    // addPlayer에는 3개의 파라미터가 필요했지.
    // 그 파라미터들은 각각 ref로 불러온 값들의 value가 되겠지?
    // 그러니까 nameInput.current.value 가 되는거야

    // input에 넣은 value들과 onClick이 실행되어야 하니까,
    // 값을 바로 받아서 할 수 있게 여기에 input과 button을 넣자.

    return (
        <>
            <div>
                <h1>LCK Players</h1>
                <input type="text" placeholder="name" ref={nameInput} />
                <input type="text" placeholder="position" ref={positionInput} />
                <input type="text" placeholder="team" ref={teamInput} />  
                <button onClick={onAddPlayer}>추가하기</button>
            </div>
            <Player playerList={playerList}/>
            {/* 여기 Player에서 변한 state값을 표시해주는거야! */}
            {/* 변한 state값은 playerList에 저장되어 있으니까, playerList를 props로 넘겨주자 */}
        </>   
    );
}

export default PlayerContainer;