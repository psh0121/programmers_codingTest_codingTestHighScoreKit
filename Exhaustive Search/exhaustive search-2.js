// https://school.programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
    let result = new Array(3).fill(0);

    // 수포자 문제 찍는 방식
    let p1 = [1, 2, 3, 4, 5];
    let p2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    // 맞은 개수 파악하기
    for(let i = 0; i < answers.length; i++) {
        if(answers[i] === p1[i % p1.length]) result[0]++;
        if(answers[i] === p2[i % p2.length]) result[1]++;
        if(answers[i] === p3[i % p3.length]) result[2]++;
    }

    let maxCnt = Math.max(...result);   // 가장 많이 맞은 개수

    // map: [맞은개수, 어떤 수포자인지] 형식으로 변경
    // filter: 맞은 개수들 중에서 가장 많이 많은 개수의 값과 일치한 엘리먼트만 살려준다
    // map: [맞은개수, 어떤 수포자인지]에서 1번째 값만 나오도록 설정한다
    result = result.map((el, idx) => [el, idx + 1])
            .filter(el => el[0] === maxCnt)
            .map(el => el[1]);

    return result;
}

console.log(solution([1, 2, 3, 4, 5])); // 1