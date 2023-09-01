// 모의고사

// 수포자는 수학을 포기한 사람의 준말입니다. 
// 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 
// 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 
// 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

function solution(answers) {
    const result = [];

    // 수포자의 찍는 패턴
    const num1 = [1, 2, 3, 4, 5];
    const num2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const num3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    // 맞힌 개수
    const num1Cnt = answers.filter((el, idx) => el === num1[idx % num1.length]).length;
    const num2Cnt = answers.filter((el, idx) => el === num2[idx % num2.length]).length;
    const num3Cnt = answers.filter((el, idx) => el === num3[idx % num3.length]).length;

    // 가장 많이 맞힌 개수
    const maxCnt = Math.max(num1Cnt, num2Cnt, num3Cnt);

    if(maxCnt === num1Cnt) result.push(1);
    if(maxCnt === num2Cnt) result.push(2);
    if(maxCnt === num3Cnt) result.push(3);

    return result;
}

console.log(solution([1, 2, 3, 4, 5]));     // [1]
console.log(solution([1, 3, 2, 4, 2]));     // [1, 2, 3]