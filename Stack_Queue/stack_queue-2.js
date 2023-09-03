// https://school.programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
    let result= [];
    let cnt = 1;
    let compareDay;

    // progresses값이 speeds를 통해 몇일만에 100이상이 되는지에 대한 값을 파악한다
    let fDays = progresses.map((el, index) => Math.ceil(((100 - el) / speeds[index])));

    // fDays의 앞에 있는 값을 기준으로 더 큰 값이 나오기 전까지 카운트를 세어 result에 넣는다
    while(fDays.length) {
        cnt = 1;
        compareDay = fDays[0];

        for(let i = 1; i < fDays.length; i++) {
            if(compareDay >= fDays[i]) cnt++;
            else break;
        }

        result.push(cnt);
        fDays.splice(0, cnt);
    }

    return result;
}

console.log(solution([93, 30, 55], [1, 30, 5]));   // [2, 1]