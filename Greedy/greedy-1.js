// https://school.programmers.co.kr/learn/courses/30/lessons/42862

function solution(n, lost, reserve) {
    let result = n - lost.length;  // 전체 학생수 - 체육복 도난당한 학생수 = 체육복 가지고 있는 학생수
    
    lost.sort((a, b) => a - b);
    
    // 여벌옷을 가져온 학생중 체육복을 잃어버린경우 자기가 가져온 여벌옷을 입어야한다
    for(let i = 0; i < lost.length; i++) {
      if(reserve.includes(lost[i])) {
        reserve.splice(reserve.indexOf(lost[i]), 1);
        result++;
        
        lost[i] = 'F';
      }
    }
    
    while(lost.length !== 0) {
      let lostStudent = lost.shift();
      
      // lostStudent에 -1 이나 +1 한 값이 reserve안에 들어있다면
      // => result +1
      // => 여벌옷 빌려준 친구 reserve명단 안에서 삭제
      if(reserve.includes(lostStudent - 1)) {
        result ++;
        reserve.splice(reserve.indexOf(lostStudent - 1), 1);
      }
      
      else if(reserve.includes(lostStudent + 1)) {
        result ++;
        reserve.splice(reserve.indexOf(lostStudent + 1), 1);
      }
    }
    
    return result;
}

console.log(solution(5, [2, 4], [1, 3, 5]));    // 5
console.log(solution(5, [2, 4], [3]));    // 4
console.log(solution(3, [3], [1]));    // 2