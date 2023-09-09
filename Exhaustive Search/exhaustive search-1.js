// https://school.programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
    // sizes에서 가로, 세로로 구분짓지 않고 짧은 길이와 긴 길이로 나눠준다
    let minLen = sizes.map(el => Math.min(...el));
    let maxLen = sizes.map(el => Math.max(...el));

    // minLen과 maxLen에서 가장 긴 길이를 하나씩 뽑아서 넓이값을 구한다
    let result = Math.max(...minLen) * Math.max(...maxLen);

    return result;
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]])); // 4000