// https://school.programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
    let queue = [...priorities];    // queue안에 priorities를 넣는다
    let maxNum = Math.max(...queue);    // queue중 가장 큰 수를 넣는다
    let i = 0;
    let result = 0;

    while(true) {
        // 위치에 maxNum과 같은 값을 가지고 있다면 
            // 횟수인 result를 +1 하고, 이미 방문했다는 의미로 -1로 값을 재배치 한다
            // 이때 매개변수 location과 같은 값을 가진다면 그값은 결과값으로 break 한다
        if(queue[i] === maxNum) {
            result++;
            queue[i] = -1;
            if(i === location) break;
        }

        // 배열을 계속 돌아야하기 때문에 i에 1더한 값에 queue길이의 나머지값으로 설정한다
        // maxNum이 변경되었을 수 있으므로 재설정 해준다
        i = (i + 1) % queue.length;
        maxNum = Math.max(...queue);
    }

    return result;
}

console.log(solution([2, 1, 3, 2], 2));   // 1