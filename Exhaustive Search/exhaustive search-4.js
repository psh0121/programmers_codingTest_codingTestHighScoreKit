// https://school.programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
    let result = [];    // [가로, 세로]
    let startNum = 0;
    let guessBrown = 0;

    // 시간초과를 방지하기 위해 yellow의 개수에 따라 startNum을 달리한다
    if(yellow % 2 === 0) startNum = 2;
    else startNum = 1;

    while(startNum <= yellow) {
        // yellow를 나누어 가로와 세로가 될 수 있는 경우를 파악해 답을 유도한다
        if(yellow % startNum === 0) {
            // min은 세로, max는 가로를 의미하며
            // 이때 Brown의 넓이를 구해 개수를 파악한다
            let [min, max] = [Math.min(startNum, yellow / startNum), Math.max(startNum, yellow / startNum)];
            guessBrown = ((max + 2) * 2) + (min * 2);

            // 문제에서 제시한 개수와 유추한 개수가 일치할 경우 가로와 세로의 값을 넣은 후 리턴한다
            if(brown === guessBrown) {
                result.push(max + 2);
                result.push(min + 2);
                break;
            }
        }

        startNum += 2;
    }
    return result;
}

console.log(solution(10, 2)); // [4, 3]