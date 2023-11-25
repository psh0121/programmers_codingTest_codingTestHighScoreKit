// https://school.programmers.co.kr/learn/courses/30/lessons/42860

// String.prototype.charCodeAt()
// -> 지정된 인덱스의 UTF-16 코드 단위를 나타내는 0에서 65535사이의 정수 반환
function solution(name) {
  let result = 0;
  
  // chars - name의 문자들이 'A'를 기준으로 정방향으로 문자를 찾는게 빠른지 역방향으로 찾는게 빠른지를 파악해 최솟값들을 모아놓은 배열
  let chars = name.split('').map(c => {
    let findCode = c.charCodeAt();
    return Math.min(findCode - 'A'.charCodeAt(),
                   'Z'.charCodeAt() - findCode + 1);
  });
  
  // minMove - 최소 이동값
  let minMove = chars.length - 1;
  
  chars.forEach((char, idx) => {
    // 문자를 만들기위한 최솟값을 result에 값을 더해준다
    result += char;
    
    // nextIdx - 다음 인덱스
    let nextIdx = idx + 1;
    
    // 'A'값은 통과하기 위해 반복문을 통해 nextIdx의 값을 설정해준다
    while(nextIdx < chars.length && chars[nextIdx] === 0) nextIdx++;
    
    // 여러 방법중 최솟값을 정해 minMove의 값을 설정해준다
    minMove = Math.min(minMove,  // 정방향
                      (idx * 2) + chars.length - nextIdx,  // 앞으로 갔다가 뒤로가기
                    idx + 2 * (chars.length - nextIdx));  // 뒤로먼저 가기
  })
  
  // result에 minMove를 추가후 리턴
  result += minMove;
  return result;
}

console.log(solution("JAZ"));    // 11
console.log(solution("JEROEN"));    // 56
console.log(solution("JAN"));    // 23