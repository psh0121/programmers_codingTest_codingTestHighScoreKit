// https://school.programmers.co.kr/learn/courses/30/lessons/43163

let findSmilarStrIdx = (compareStr, goal, arr) => {
  // idx - 결과값 인덱스
  // goalSmilarCnt - arr중에서 goal와 같은 인덱스에 같은 문자인 개수
  // compareStrTemp - 반복문을 통해 compareStr와 arr[i]와 같은 인덱스에 같은 문자인 개수 (임시)
  // goalTemp - 반복문을 통해 goal와 같은 인덱스에 같은 문자인 개수 (임시)
  let idx = -1;
  let goalSmilarCnt = 0;
  let [compareStrTemp, goalTemp] = [0, 0];
  
  for(let i = 0; i < arr.length; i++) {
    compareStrTemp = compareStr.split('').filter((char, idx) => char === arr[i][idx]).length;
    
    // compareStrTemp가 compareStr의 개수 -1과 다르다면 pass
    if(compareStrTemp !== compareStr.length -1) continue;
    
    goalTemp = goal.split('').filter((char, idx) => char === arr[i][idx]).length;
    
    // goalSmilarCnt의 개수가 goalTemp보다 작거나 같을 경우 idx와 goalSmailarCnt의 개수를 업데이트 한다
    if(goalSmilarCnt <= goalTemp) {
      idx = i;
      goalSmilarCnt = goalTemp;
    }
  }
  
  return idx;
}

function solution(begin, target, words) {
  let result = 0;
  
  // 애초에 words안에 target가 없다면 return 0
  if(!words.includes(target)) return result;
  
  // curStr - 현재문자, begin을 시작으로 words를 순회하면서 값을 계속 업데이트할 예정
  let curStr = begin;
  
  while(words.length !== 0) {
    // smilarIdx - findSmilarStrIdx에서 찾은 words중에서 규칙을 성립하면서 target과 유사한 문자의 인덱스
    // words에서 curStr와 같은 위치에 같은 문자의 개수가 curStr.length - 1 이면서
    // target와 일치하는 개수가 가장 높은 문자의 인덱스 값을 확인한다
    let smilarIdx = findSmilarStrIdx(curStr, target, words);
    
    // findSmilarStrIdx를 한번 돌았기 때문에 횟수 +1
    result++;
    
    // target와 같은 값일 경우 반복문 종료
    if(target === words[smilarIdx]) break;
    
    // 다음 값을 순회하기 위해 smilarIdx를 통해 얻은 인덱스 값으로 curStr를 업데이트를 한다
    curStr = words[smilarIdx];

    // curStr로 선택된 문자는 다음 순회를 위해서 words안에서 제거해준다
    words.splice(smilarIdx, 1);
  }
  
  return result;
}

console.log(solution('hit', 'cog', ["hot", "dot", "dog", "lot", "log", "cog"]));    // 4