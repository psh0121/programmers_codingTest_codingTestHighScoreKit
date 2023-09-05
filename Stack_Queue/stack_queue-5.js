// https://school.programmers.co.kr/learn/courses/30/lessons/42583

function solution(bridge_length, weight, truck_weights) {
    let result = 0; // 소요시간 (결과값)
    let kg = 0; // 현재 다리위에 있는 트럭들의 무게
    let [truckCnt, finishTruckCnt] = [truck_weights.length, 0]; // 기존 truck_weights의 개수, 다리를 다 지나간 트럭의 개수
    let bridge = [];    // 다리위에 있는 트럭 정보 : [[트럭 number, 경과시간], ...]

    while(finishTruckCnt !== truckCnt) {    // 트럭이 다 지나가기전까지 반복문 실행
        // (kg + 다리를 지나갈 예정인 트럭의 무게)가 제한무게를 넘지 않는다면 => 다리를 지나간다
        if(weight >= kg + truck_weights[0]) {   
            kg += truck_weights[0]; 
            bridge.push([truck_weights.splice(0, 1)[0], 0]);
        }
        
        // 다리위에 있는 트럭들의 경과시간을 +1 한다
        bridge = bridge.map(el => [el[0], ++el[1]]);

        // 경과시간이 소요시간과 일치한다면 (다리를 다 건넜다면) => 다리에 있는 트럭 정보를 빼고, 완료된 트럭개수에 +1
        if(bridge[0][1] === bridge_length) {
            kg -= bridge.splice(0, 1)[0][0];
            finishTruckCnt++;
        }

        result++;   // 소요시간 +1
    }

    return result + 1;  // 트럭이 다 나갔을때의 시간까지 더해준 다음 return
}

console.log(solution(2, 10, [7, 4, 5, 6]));   // 8