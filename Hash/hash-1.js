// https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
    // 최대로 내가 가져갈 수 있는 포켓몬 개수를 result에 넣는다
    let result = nums.length / 2;

    // nums에서 중복값을 제거한다
    let reduceArr = nums.filter((el, i) => nums.indexOf(el) === i);

    // reduceArr의 개수와 result의 개수중 작은 값을 리턴한다
    return Math.min(result, reduceArr.length);
}

console.log(solution([3,1,2,3]));   // 2