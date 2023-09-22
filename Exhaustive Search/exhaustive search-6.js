// https://school.programmers.co.kr/learn/courses/30/lessons/84512

function solution(word) {
  // stack_ - n개의 개수로 모음을 조합한 배열
  let stack1 = ['A', 'E', 'I', 'O', 'U'];
  let stack2 = [];
  let stack3 = [];
  let stack4 = [];
  let stack5 = [];
  
  // dictionary - stack_을 합친 사전
  let dictionary = [];
  
  // 스택n에 있는 요소값에 모음을 하나씩 돌려가며 뒤에 붙인다음 스택n+1에 새롭게 담아주는것을 반복하도록 한다
  // 이하 방식 동일
  stack1.forEach(str => {
    for(let i = 0; i < 5; i++) {
      stack2.push(str.concat(stack1[i]));
    }
  })
  
  stack2.forEach(str => {
    for(let i = 0; i < 5; i++) {
      stack3.push(str.concat(stack1[i]));
    }
  })
  
  stack3.forEach(str => {
    for(let i = 0; i < 5; i++) {
      stack4.push(str.concat(stack1[i]));
    }
  })
  
  stack4.forEach(str => {
    for(let i = 0; i < 5; i++) {
      stack5.push(str.concat(stack1[i]));
    }
  })
  
  // 스택의 있는 모든 조합을 dictionary안에 담아주고 정렬해준다
  dictionary = [...stack1, ...stack2, ...stack3, ...stack4, ...stack5];
  dictionary.sort();
  
  // dictionary 안에 있는 word의 위치값에 +1한 값을 리턴해주도록 한다
  return dictionary.indexOf(word) + 1;
}

console.log(solution("AAAAE")); // 6



