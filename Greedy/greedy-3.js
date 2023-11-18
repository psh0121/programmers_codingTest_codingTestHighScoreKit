// https://school.programmers.co.kr/learn/courses/30/lessons/42883

function solution(number, k) {
  let stack = [];

  // number의 i번째의 값을 stack에 쌓는다
  for(let i = 0; i < number.length; i++) {
    let element = number[i];  // stack에 넣을 원소

    // 단, element의 값 stack의 가장 마지막값과 비교했을때 클 경우
    // => stack의 마지막값을 삭제, k값을 -1한 후 에 stack에 넣어준다
    // => 또한 element의 값과 stack의 마지막값은 k값이 0이되기전까지 반복한다
    while(k > 0 && stack[stack.length - 1] < element) {
      stack.pop();
      k--;
    }

    stack.push(element);
  }

  // 이때 for문을 벗어났음에도 k의 값이 0이 아닐경우를 대비해 나머지영역을 잘라주도록 한다
  stack.splice(stack.length - k, k);

  return stack.join('');
}

console.log(solution("1924", 2));    // 94
console.log(solution("1231234", 3));    // 3234
console.log(solution("4177252841", 4));    // 775841