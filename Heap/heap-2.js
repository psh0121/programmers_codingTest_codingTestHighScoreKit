// 디스크 컨트롤러

// 하드디스크는 한 번에 하나의 작업만 수행할 수 있습니다. 
// 디스크 컨트롤러를 구현하는 방법은 여러 가지가 있습니다. 
// 가장 일반적인 방법은 요청이 들어온 순서대로 처리하는 것입니다.

// 각 작업에 대해 [작업이 요청되는 시점, 작업의 소요시간]을 담은 2차원 배열 jobs가 매개변수로 주어질 때, 
// 작업의 요청부터 종료까지 걸린 시간의 평균을 가장 줄이는 방법으로 처리하면 
// 평균이 얼마가 되는지 return 하도록 solution 함수를 작성해주세요. (단, 소수점 이하의 수는 버립니다)

function solution(jobs) {
    let jobsQueue = [];     // 작업수행기준 queue
    let answer = 0;

    // 0. 요청작업이 들어온 시점을 기준으로 오름차순으로 정렬한다.
    jobs.sort((a, b) => a[0] - b[0]);

    let jobsLen = jobs.length;      // 작업의 길이
    let i = 0;      // while문 초기값
    let startPoint = 0;     // 작업을 시작할 시작지점

    // 1. i는 공급받은 jobs의 길이를 넘어서는 안되거나, 큐에 저장된 값이 존재해야 한다.
    while(i < jobsLen || jobsQueue.length > 0){
        // 1-1. i번째의 요청시점이 startPoint를 넘지 않을 경우 queue에 데이터를 넣어준다.
        if(i < jobsLen && jobs[i][0] <= startPoint){
            jobsQueue.push(jobs[i]);
            i++;
            continue;
        }

        // 1-2. jobsQueue를 작업시간이 짧은 기준으로 정렬을 진행한다.
        jobsQueue.sort((a, b) => a[1] - b[1]);

        // 1-3. 큐에 데이터가 있을 경우
        // ==> 큐에 가장 앞을 잘라내어 startPoint를 재설정해준다. (startPoint = 기존 시작지점 + job의 작업시간)
        // ==> job이 한 일을 answer에 누적한다. (answer = answer + (시작지점 - job의 작업요청시간))
        if(jobsQueue.length > 0){
            let job = jobsQueue.shift();
            startPoint += job[1];
            answer += startPoint - job[0];
        }
        else {
            startPoint = jobs[i][0];
        }
    }

    // 결과값 반환
    return Math.floor(answer / jobsLen);
}

console.log(solution([[0, 3], [1, 9], [2, 6]]));    // 9