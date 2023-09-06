// https://school.programmers.co.kr/learn/courses/30/lessons/42584?language=javascript

function solution(prices) {
    let result = [];    // 결과값
    let downFlag;   // 중간에 가격이 떨어졌는지에 대한 boolean값
    let j;
    let notDownCnt; // 가격이 떨어지지 않은 횟수값

    for(let i = 0; i < prices.length; i++) {    // 이전 주식값(비교값)
        downFlag = false;   // 초기값 설정

        for(j = i + 1; j < prices.length; j++) {    // 이후 주식값(비교대상값)
            // 이전 주식값보다 이후 주식값이 떨어졌다면 => downFlag 깃발 올리고 반복문 나가기
            if(prices[j] < prices[i]) {
                downFlag = true;
                break;
            }
        }

        // 가격이 한번이라도 다운된 적이 있다면 => 가장먼저 가격이 내려간 시점 - 비교값
        if(downFlag) notDownCnt = j - i;

        // 가격이 내려간 적이 없다면 => prices의 마지막 인덱스 - 비교값
        else notDownCnt = (j - 1) - i;

        result.push(notDownCnt);
    }

    return result;
}

console.log(solution([1, 2, 3, 2, 3]));   // [4, 3, 1, 1, 0]