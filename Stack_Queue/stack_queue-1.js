// https://school.programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr)
{
    let result = [arr[0]];
    let beforeNum = arr[0];

    // beforeNum에서 담긴 값과 같은 값일 경우를 제외한 나머지 값을 result에 넣는다
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] !== beforeNum) result.push(arr[i]);
        beforeNum = arr[i];
    }

    return result;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));   // [1, 3, 0, 1]