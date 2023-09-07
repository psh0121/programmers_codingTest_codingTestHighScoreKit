// https://school.programmers.co.kr/learn/courses/30/lessons/42627

function solution(jobs) {
    let queue = [];  // 작업수행기준
    let answer = 0;
    let cnt = jobs.length;  // 작업길이
    let startPoint = 0;  // 작업 시작시점
    let i = 0;
    
    // 들어온 시점을 기준으로 오름차순 정렬
    jobs.sort((a, b) => a[0] - b[0]);
    
    // i의 인덱스값이 jobs의 인덱스가 넘어가지 않거나, 큐안에 정보가 담겨있어야 한다
    while(i < cnt || queue.length > 0) {
      // jobs의 i번째의 시작시점이 startPoint 이전시점이라면 => 큐에 데이터 추가
      if(i < cnt && jobs[i][0] <= startPoint) {
        queue.push(jobs[i++]);
        continue;
      }
      
      // 큐를 작업시간 짧은 기준으로 정렬
      queue.sort((a, b) => a[1] - b[1]);
      
      // 큐에 데이터가 존재할 경우
      // => 큐에 가장 앞에 내용을 잘라내 startPoint를 재설정한다
      // => answer에 일 진행시간 누적
      if(queue.length) {
        let job = queue.shift();
        startPoint += job[1];
        answer += startPoint - job[0];
      }
      // 큐에 데이터가 존재하지 않을 경우 (시작지점이 startPoint값보다 클경우)
      // => startPoint를 jobs[i][0]으로 재설정한다
      else startPoint = jobs[i][0];
    }
    
    return Math.floor(answer / cnt);
  }

console.log(solution([[0, 3], [1, 9], [2, 6]]));    // 9