// https://school.programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
    let result = 1;
    let closet = {};    // 옷장을 만들어 종류별로 정리한다

    clothes.forEach(el => {
        if(!closet[el[1]]) closet[el[1]] = [el[0]];
        else closet[el[1]].push(el[0]);
    });

    // 같은 종류중에서는 하나를 착용해야하며, 어쩔땐 착용하지 않을 때도 있다
    // nC1 + nC0 => 각 경우는 동시에 발생되는 것이 아니기에 더하기를 한다
    for(let key in closet) {
        result *= (closet[key].length + 1);
    }

    // 위의 경우 아무것도 입지 않았을 경우도 포함된 결과값으로 -1을 진행한 후 리턴한다
    return result - 1;
}

console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]));  // 5