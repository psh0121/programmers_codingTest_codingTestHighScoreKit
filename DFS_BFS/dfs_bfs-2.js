// https://school.programmers.co.kr/learn/courses/30/lessons/1844

function solution(maps) {
    let result = -1;
    
    // dy, dx - maps의 상하좌우 방향
    let dy = [-1, 1, 0, 0];
    let dx = [0, 0, -1, 1];
    
    // mapsCpy - maps 복사
    // row, col - mapsCpy의 마지막 인덱스값
    let mapsCpy = maps.slice();
    let [row, col] = [mapsCpy.length - 1, mapsCpy[0].length - 1];
    
    // queue - BFS를 활용해 maps의 최단거리를 파악할 예정
    // [y, x, cnt]순으로 배치하여 y와 x가 가장 먼저 목표점에 도착했을때 cnt 값을 리턴할 수 있어야 한다
    // 빨리 목표지점에 도착하면 그게 바로 최단거리!
    let queue = [[0, 0, 1]];
    
    // queue안에 값이 존재할때까지 반복
    while(queue.length) {
      let [y, x, cnt] = queue.shift();
      
      // 만약 y와 x가 row와 col의 값과 일치한다면 cnt 리턴
      if(y === row && x === col) return cnt;
      
      // dy와 dx에 대한 반복문을 돌려 cnt에 대한 값을 재설정 할 수 있도록 한다
      for(let i = 0; i < 4; i++) {
        // nextY, nextX - 다음예상 위치 인덱스
        let [nextY, nextX] = [y + dy[i], x + dx[i]];
        
        // 만약 nextY, nextX가 범위를 넘어설 경우 => 다음위치로
        if(nextY < 0 || nextX < 0 || nextY > row || nextX > col) continue;
        
        // 만약 nextY, nextX가 벽일 경우 => 다음위치로
        if(mapsCpy[nextY][nextX] === 0) continue;
        
        // 건너갈 수 있는 길이라면
        // => nextY, nextX에 대한 값을 방문한 의미로 0으로 값을 변경한다
        // => queue에 cnt를 +1 추가하여 값을 넣어준다
        mapsCpy[nextY][nextX] = 0;
        queue.push([nextY, nextX, cnt + 1]);
      }
    }
    
    return result;
  }

console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]));    // 11