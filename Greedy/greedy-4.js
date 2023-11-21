// https://school.programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
  let cnt = 0;

  // 몸무게 내림차순 정렬
  people.sort((a, b) => b - a);

  // 처음과 끝 인덱스값
  let [maxIdx, minIdx] = [0, people.length - 1];

  // 처음과 끝의 인덱스가 교차되지 않을 동안 반복
  while(maxIdx <= minIdx) {
    // 둘의 몸무게의 합이 무게제한을 초과하지 않을 경우
    // => 두사람 pass
    if(people[maxIdx] + people[minIdx] <= limit) {
      maxIdx++;
      minIdx--;
    }
    // 둘의 몸무게의 합이 무게제한을 초과할 경우
    // => 무거운 한사람만 pass
    else maxIdx++;

    // 구명보트 개수 +1
    cnt++;
  }
  return cnt;
}

console.log(solution([70, 50, 80, 50], 100));    // 3
console.log(solution([70, 80, 50], 100));    // 3