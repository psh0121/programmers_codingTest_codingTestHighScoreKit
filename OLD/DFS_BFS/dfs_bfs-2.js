// 네트워크

function solution(n, computers) {
    let result = 0;
    let visited = [false];

    const DFS = function(node){
        visited[node] = true;
        for(let i = 0; i < computers[node].length; i++){
            // 노드의 특정 인덱스가 연결되고 있으나 방문체크가 되지 않았을 경우 => DFS발동!
            if(computers[node][i] === 1 && !visited[i]) DFS(i);
        }
    }

    // 각 노드 개수를 기준으로 반복문을 돌린다.
    for(let i = 0; i < computers.length; i++){
        // 노드에 방문하지 않았을 경우 DFS를 사용해 방문하도록 한다.
        if(!visited[i]){
            DFS(i);
            result++;
        } 
    }

    return result;
}

console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]));    // 2
console.log(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]));    // 1