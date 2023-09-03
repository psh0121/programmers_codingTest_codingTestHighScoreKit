// https://school.programmers.co.kr/learn/courses/30/lessons/12909

function solution(s){
    let cnt = 0;
    let len = s.length;
    let result = true;

    for(let i = 0; i < len; i++) {
        // cnt를 이용해 '('면 ++, 아니면 --를 한다
        if(s[i] === '(') cnt++;
        else cnt--;

        // ')'가 한번이라도 먼저 등장한다면 false
        if(cnt < 0) {
            result = false;
            break;
        }

        // '('의 개수가 ')'의 개수보다 많으면 false
        if(cnt > len - i) {
            result = false;
            break;
        }
    }
    
    // cnt가 딱 떨어진다면 true, 아니면 false
    if(cnt == 0) result = true;
    else result = false;

    return result;
}

console.log(solution("()()"));   // true