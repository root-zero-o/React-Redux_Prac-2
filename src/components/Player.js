import React from "react";

//playerList를 받아왔어
// playerList는 [{name :  , position :   , team:  },{},... ]형태의 배열이겠지?
function Player({playerList}) {

    const playerMap = playerList.map((value, index) => ( // 여기서 value는 배열 하나하나 일거야
        <div key={index}>
            <span>position : {value.name}</span>
            <span>position : {value.position}</span>
            <span>team : {value.team}</span>
        </div>
    ))

    return (
        <>
            {playerMap}
        </>
    )
}

export default Player;