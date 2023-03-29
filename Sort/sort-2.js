// 가장 큰 수

// 0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.
// 예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 
// 이중 가장 큰 수는 6210입니다.
// 0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 
// 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

function solution(numbers) {
    // 0. numbers를 문자화 한다.
    let arr = numbers.map(el => String(el));
    
    // 1. ab와 ba 형식으로 값을 비교해 정렬을 진행해 준다.
    arr.sort((a, b) => {
        if(Number(a+b) < Number(b+a)) return 1;
        else return -1;
    });
    
    // 2. 반례 (ex. "000" => "0") 처리
    if(Number(arr.join("")) === 0) return "0";
    
    return arr.join("");
}

console.log(solution([6, 10, 2]));  // "6210"
console.log(solution([3, 30, 34, 5, 9]));   // "9534330"   