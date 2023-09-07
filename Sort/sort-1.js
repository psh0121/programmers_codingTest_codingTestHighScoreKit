// https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
    let result = [];

    for(let i = 0; i < commands.length; i++) {
        let [ii, jj, kk] = commands[i];
        let arr = array.slice(ii - 1, jj);  // 원하는 크기만큼 배열 수집

        arr.sort((a, b) => a - b);  // 오름차순 정렬
        result.push(arr[kk - 1]);   // kk - 1 번째 값 push
    }

    return result;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));    // [5, 6, 3]