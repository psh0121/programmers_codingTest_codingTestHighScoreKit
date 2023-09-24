// https://school.programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers, target) {
    let result = 0;
    
    let dfs = (sum, index) => { // 누적값과 인덱스값을 매개변수로 넣어 시작한다
        // 조건1) 만약 인덱스 값이 배열 numbers의 길이와 같고 (더이상 더할 numbers의 요소가 없다)
        // 조건2) 누적값(sum)이 target와 같을 경우 result + 1을 해준후 종료한다
        // 만약, 조건 1만 성립될 경우에는 재귀를 종료시키도록한다
        if(index === numbers.length) {
            if(sum === target) result++;
            return;
        }
        
        // 여러요소들의 값을 더하거나 빼어야하기 때문에 다른 값을 넣어 재귀를 돌리는 것을 반복한다
        dfs(sum + numbers[index], index + 1);
        dfs(sum - numbers[index], index + 1);
    }
    
    // 깊이 우선탐색을 활용해 result값 도출
    dfs(0, 0);
    
    return result;
}

console.log(solution([1, 1, 1, 1, 1], 3));    // 5