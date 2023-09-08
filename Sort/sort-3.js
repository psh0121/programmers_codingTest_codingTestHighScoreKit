// https://school.programmers.co.kr/learn/courses/30/lessons/42747

function solution(citations) {
    // citations 중에서 가장 큰값을 cnt의 시작으로 잡는다
    let cnt = Math.max(...citations);
    
    while(true) {
      // citations 중에서 cnt이상 인용된 논문의 수가 cnt 이상인 값의 길이가 만족시 반복문을 중단한다
      if(citations.filter(el => el >= cnt).length >= cnt) break;
      cnt--;
    }
    
    return cnt;
  }

console.log(solution([3, 0, 6, 1, 5])); // 3