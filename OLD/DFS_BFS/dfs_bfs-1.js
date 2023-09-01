// 타켓 넘버

function solution(numbers, target) {
    let result = 0;
    const numbersLen = numbers.length;

    // 재귀로 동작 ==> cnt가 numbers의 개수만큼이 될때까지 돌려가며 확인한다.
    let DFS = function(cnt, sum){
        if(cnt === numbersLen){
            if(sum === target){
                result++;
            }
        }
        else{
            DFS(cnt + 1, sum + numbers[cnt]);
            DFS(cnt + 1, sum - numbers[cnt]);
        }
    }

    DFS(0, 0);

    return result;
}

console.log(solution([1, 1, 1, 1, 1], 3));  // 5
console.log(solution([4, 1, 2, 1], 4));  // 2