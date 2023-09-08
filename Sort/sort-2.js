// https://school.programmers.co.kr/learn/courses/30/lessons/42746

function solution(numbers) {
    numbers.sort((a, b) => {
      if(Number(`${a}${b}`) < Number(`${b}${a}`)) return 1;
      else return -1;
    })
    return numbers[0] === 0 ? '0' : numbers.join('');
  }

console.log(solution([6, 10, 2]));  // "6210"