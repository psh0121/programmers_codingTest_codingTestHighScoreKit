// https://school.programmers.co.kr/learn/courses/30/lessons/43164

function solution(tickets) {
  let result = [];
  let graph = {};

  // countryCnt - tickets 경로에서 나라의 개수는 tickets에서 +1한 값이다
  let countryCnt = tickets.length + 1;
  
  // 그래프 만들기 
  tickets.forEach(route => {
    let [start, end] = route;
    
    if(graph[start] === undefined) graph[start] = [];
    graph[start].push(end);
  })
  
  let dfs = (node, arr) => {
    // arr의 길이가 countryCnt의 개수와 일치할 경우
    // => result의 값을 arr로 설정하고 true값을 리턴하며 종료한다
    if(arr.length === countryCnt) {
      result = arr;
      return true;
    }
    
    // 여행이 끝나기도 전에 갈 여행지가 없을 경우 false를 리턴하며 종료한다
    if(graph[node] === undefined) return false;
    
    // 배열을 오름차순으로 정렬한다
    graph[node].sort();
    
    // 여행지가 중복되었을 때 해당 나라를 먼저 거쳤을 경우 모든 나라를 거치는지 파악한다
    // 이때 모든 여행지를 거치지 않았을 경우(false) curNode를 통해 떼어냈던 여행지를 다시 붙여놓는다
    for(let i = 0; i < graph[node].length; i++) {
      let curNode = graph[node].splice(i, 1)[0];    // 현재 노드
      
      if(!dfs(curNode, [...arr, curNode])){
        graph[node].splice(i, 0, curNode);
        continue;
      }
    }
  }
  
  // 인천을 출발지로 시작한다
  dfs('ICN', ['ICN']);
  
  return result;
}

console.log(solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]));    // ["ICN", "JFK", "HND", "IAD"]
console.log(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]));   // ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]
console.log(solution([["ICN", "JFK"], ["ICN", "AAD"], ["JFK", "ICN"]]));    // ["ICN", "JFK", "ICN", "ADD"]