// https://school.programmers.co.kr/learn/courses/30/lessons/86971

let makeGraph = (n, wires) => {
  let result = {};
  
  // n개만큼 객체 안에 노드값을 가진 키값과 빈배열을 생성해준다
  for(let i = 1; i <= n; i++) result[i] = [];
  
  // wires를 참고해 각 연결된 노드들의 정보를 객체안에 연결해준다
  // 이때 한번만 넣는게 아니라 교차해서도 값을 넣어준다
  wires.forEach(branch => {
    let [start, end] = branch;
    result[start].push(end);
    result[end].push(start);
  })
  
  return result;
}

let cntDFS = (graph, startNode, passNode) => {
  let visitedNode = []; // 방문한 노드의 배열
  let needNode = [];  // 방문할 노드의 배열
  
  // 시작할 노드를 방문할 노드의 배열에(needNode) 넣어준다
  needNode.push(startNode);
  
  // 방문할 노드의 배열(needNode)안에 값이 없을때까지 반복문을 돌려준다
  while(needNode.length !== 0) {
    // node - needNode의 배열중 가장 앞에 있는 요소를 잘라냄
    let node = needNode.shift();
    
    // visitedNode에 포함되어 있지 않고 passNode의 값이 아니라면
    if(!visitedNode.includes(node) && node !== passNode) {
      // visitedNode에 넣어준다
      visitedNode.push(node);
      // needNode의 배열값을 현재의 노드값 안에 있는 배열값을 우선으로 배치시키고, 나머지 값을 뒤에 붙여 재설정 해준다
      needNode = [...graph[node], ...needNode];
    }
  }
  
  // 현재까지 방문한 노드들의 개수를 리턴한다
  return visitedNode.length;
}

function solution(n, wires) {
  let graph = {}; // 그래프정보 ex) {'1' : [2, 4], ...}
  let differ = Number.MAX_SAFE_INTEGER; // JS에서 안전한 최대 정수값
  
  // 그래프 생성
  graph = makeGraph(n, wires);
  
  // 객체순환
  // 송전탑을 두전력망을 나누었을때의 경우를 파악해(cntDFS) 송전탑의 차이가 작은값을 확인해(differ) 최종 차이값을 내보낸다
  for(let [from, nodes] of Object.entries(graph)) {
    nodes.forEach(to => {
      // cnt - 특정 graph를 끊어냈을때의 연결되어있는 송전탑의 개수
      let cnt = cntDFS(graph, Number(from), to);
      // differ - 두전력망의 차이의 최솟값
      differ = Math.min(differ, Math.abs(cnt - (n - cnt)));
    })
  }
  return differ;
}

console.log(solution(9, [[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]])); // 3



