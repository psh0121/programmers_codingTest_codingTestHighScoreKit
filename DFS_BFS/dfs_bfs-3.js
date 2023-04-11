// 게임 맵 최단거리

// BFS 활용

// 길이 맞는지 아닌지 파악함수
const isNotRoad = (nextY, nextX, row, col) => nextY < 0 || nextX < 0 || nextY > row || nextX > col;

function solution(maps){
  // 상하좌우
  const dy = [1, -1, 0, 0];
  const dx = [0, 0, -1, 1];
  
  // maps deep copy
  let mapsCpy = Array.from(
    {length: maps.length}, 
    () => Array(maps[0].length).fill(0)
  );
  
  maps.forEach((el1, idx1) => {
    el1.forEach((el2, idx2) => {
      mapsCpy[idx1][idx2] = maps[idx1][idx2];
    })
  })
  
  const [row, col] = [mapsCpy.length - 1, mapsCpy[0].length - 1];
  const queue = [[0, 0, 1]];  // 현재 y위치, 현재 x위치, 개수
  
  while(queue.length){
    // 큐 추출
    let [y, x, cnt] = queue.shift();
    
    // 목적지 도착일 경우 => return cnt
    if(y === row & x === col) return cnt;
    
    // 다음 경로 확인
    for(let i = 0; i < 4; i++){
      const [nextY, nextX] = [y + dy[i], x + dx[i]];
      
      // 경로이탈 파악 ==> 이탈시 다음 경로 파악
      if(isNotRoad(nextY, nextX, row, col)) continue;
      
      // 다음위치가 벽일 경우 ==> 다음 경로 파악
      if(mapsCpy[nextY][nextX] === 0) continue;
      
      // 지나갈 곳은 헷갈림 방지를 위해 벽으로 처리함.
      mapsCpy[nextY][nextX] = 0;
      
      //다음 경로 파악을 위해서 cnt+1 해서 큐에 넣기
      queue.push([nextY, nextX, cnt+1]);
    }
  }
  return -1;
}

console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]));   // 11
console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]));   // -1