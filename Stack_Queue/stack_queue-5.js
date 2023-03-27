// 다리를 지나는 트럭

// 트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순으로 건너려 합니다. 
// 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 
// 다리에는 트럭이 최대 bridge_length대 올라갈 수 있으며, 
// 다리는 weight 이하까지의 무게를 견딜 수 있습니다. 
// 단, 다리에 완전히 오르지 않은 트럭의 무게는 무시합니다.

// solution 함수의 매개변수로 다리에 올라갈 수 있는 트럭 수 bridge_length, 
// 다리가 견딜 수 있는 무게 weight, 트럭 별 무게 truck_weights가 주어집니다. 
// 이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.

// 제한 조건
// - bridge_length는 1 이상 10,000 이하입니다.
// - weight는 1 이상 10,000 이하입니다.
// - truck_weights의 길이는 1 이상 10,000 이하입니다.
// - 모든 트럭의 무게는 1 이상 weight 이하입니다.

function solution(bridge_length, weight, truck_weights) {
    let time = 0;   // 경과시간
    let passingTr = []; // 다리를 건너는 트럭
    let passingTrRT = [];   // 다리를 건터는 트럭 경과시간
    let waitingTr = truck_weights.slice(); // 대기 트럭
    
    // 대기 트럭과 다리를 건너는 트럭이 없을때까지 반복문 진행한다.
    while(passingTr.length || waitingTr.length){
        // 초기값 세팅
        // 기존 다리를 건너는 트럭들과 추가될 트럭의 무게가 적정하면 => passingTr에 추가 및 경과시간 정보 추가
        if(!passingTr.length ||
            (passingTr.reduce((acc, cur) => acc + cur) + waitingTr[0] <= weight)){
            passingTr.push(waitingTr.shift());
            passingTrRT.push(0);
        }
        
        // 시간 추가
        passingTrRT = passingTrRT.map(el => el + 1);
        time++;
        
        // 만약 시간이 경과되었을 경우 => passingTr 명단에 제거한다.
        if(passingTrRT[0] === bridge_length){
            passingTr.shift();
            passingTrRT.shift();
        }
    }
    
    // 시간 업데이트
    return time + 1;
}

console.log(solution(2, 10, [7, 4, 5, 6])); // 8
console.log(solution(100, 100, [10])); // 101
console.log(solution(100, 100, [10,10,10,10,10,10,10,10,10,10])); // 110