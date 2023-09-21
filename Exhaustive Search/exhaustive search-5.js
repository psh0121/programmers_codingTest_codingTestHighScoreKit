// https://school.programmers.co.kr/learn/courses/30/lessons/87946?language=javascript

let getPermutations = (arr, selectNumber) => {
    let result = [];
    
    // selectNumber가 1일 경우 요소값에 배열을 감싸서 리턴한다
    if(selectNumber === 1) return arr.map(el => [el]);
    
    arr.forEach((fixed, index, origin) => {
        // rset - origin에서 fixed값을 제외한 나머지
        let rset = [...origin.slice(0, index), ...origin.slice(index + 1)];

        // permutations - 순열(재귀)를 사용하여 fixed를 이용한 나머지 순열을 파악한다
        let permutations = getPermutations(rset, selectNumber - 1);
        
        // attached - permutations에서 얻은 배열값에 fixed를 포함시킨다
        let attached = permutations.map(el => [fixed, ...el]);
      
        result.push(...attached);
    })
    
    return result;
}
  
function solution(k, dungeons) {
    // orders - 순열을 사용해 배열 dungeongs의 순서조합을 파악한다
    let orders = getPermutations(dungeons, dungeons.length);
    
    // cnt - orders안에 있는 배열요소를 끄집어내어 각 요소가 최대 몇번 게임을 진행할 수 있는지 값을 담는다
    let cnt = orders.map(order => {
        let curHP = k;      // 현재 피로도
        let num = 0;        // 카운트
      
        for(let i = 0; i < order.length; i++) {
            if(curHP < order[i][0]) break;  // 현재 피로도가 필요 피로도보다 낮을 경우 => 종료후 num 리턴
            
            // curHP에서 소모필요도값을 빼내어 값 재정비후 num++
            curHP -= order[i][1]; 
            num++;
        }
      
        return num;
    })

    return Math.max(...cnt);
}

console.log(solution(80, [[80,20],[50,40],[30,10]])); // 3



