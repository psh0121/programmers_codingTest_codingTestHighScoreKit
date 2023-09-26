// https://school.programmers.co.kr/learn/courses/30/lessons/43162

function solution(n, computers) {
  let result = 0;
  let graph = {};
  
  // computers 안에 있는 연결 정보를 graph안에 넣어서 정리한다
  // 이때, 자기 자신을 가리키는 것은 제외한다
  for(let i = 1; i <= n; i++) graph[i] = [];
  
  computers.forEach((nodes, idx1) => {
    nodes.forEach((node, idx2) => {
      if((idx1 !== idx2) && (node === 1)) graph[idx1 + 1].push(idx2 + 1);
    })
  })
  
  let dfs = () => {
    let visitedNode = [];   // 방문한 노드
    let needNode = [];    // 방문예정 노드
    
    // 매개변수 n만큼 반복문을 돌림
    for(let i = 1; i <= n; i++) {
      // i노드값이 이미 방문했을 경우 pass (다른 노드에서 연결되어 방문된 경우임)
      if(visitedNode.includes(i)) continue;
      
      // 첫방문일 경우 needNode에 추가
      needNode.push(i);
      
      // needNode안에 값이 있을때 까지 반복
      while(needNode.length !== 0) {
        let curNode = needNode.shift();   // 현재노드
      
        // 만약 visitedNode안에 포함되어 있지 않을 경우 
        // => 현재노드값을 visitedNode안에 추가
        // => 현재노드와 연결되어 있는 노드를 우선순위에 추가해 needNode 추가 및 재배치
        if(!visitedNode.includes(curNode)){
          visitedNode.push(curNode);
          needNode = [...graph[curNode], ...needNode];
        }
      }
      
      result++;
    }
  }
  
  dfs();
  return result;
}

console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]));    // 2