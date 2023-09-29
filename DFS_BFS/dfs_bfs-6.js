// https://school.programmers.co.kr/learn/courses/30/lessons/87694

function solution(rectangle, characterX, characterY, itemX, itemY) {
  // 매개변수값 *2 => 컴퓨터로 인한 오류발생을 방지
  rectangle = rectangle.map(rect => rect.map(point => point * 2));
  [characterX, characterY] = [characterX * 2, characterY * 2];
  [itemX, itemY] = [itemX * 2, itemY * 2];
  
  // board - 2차원 보드, rectangle 좌표 그림 그리기
  let board = Array.from({length: 104}, () => new Array(104).fill(0));
  
  // rectangle을 활용해 board 사각형 그리기 => 선(1), 면(2)
  rectangle.forEach(([x1, y1, x2, y2]) => {
    for(let y = y1; y <= y2; y++) {
      for(let x = x1; x <= x2; x++) {
        if(y === y1 || y === y2 || x === x1 || x === x2) {
          if(board[y][x] === 0) board[y][x] = 1;
        }
        else board[y][x] = 2;
      }
    }
  })
  
  // start - queue에 들어갈 첫 시작 데이터
  // queue - bfs기반 데이터 저장소
  let start = [characterX, characterY, 1];
  let queue = [start];
  
  // dy, dx - 상하좌우 위치 변경정보
  let dy = [-1, 1, 0, 0];
  let dx = [0, 0, -1, 1];
  
  // bfs를 활용해 최단거리를 구하고 리턴하도록 한다
  while(queue.length !== 0) {
    let [x, y, cnt] = queue.shift();
    
    // 도착점에 도달했을 경우 cnt의 값을 /2 하여 리턴한다 (애초에 *2 했기때문)
    if(x === itemX && y === itemY) return Math.floor(cnt/2);
    
    // 반복문을 돌려 x, y를 상하좌우 했을 경우의 데이터를 입력받는다
    for(let i = 0; i < 4; i++) {
      // nX, nY - 상하좌우 후의 x, y 정보
      let nX = x + dx[i];
      let nY = y + dy[i];
      
      // 보드의 값이 1일 경우 (= 길)
      // => queue에 없데이트된 정보를 넣은 후 다음 반복을 준비한다
      // => 해당 위치는 지났다는 의미로 3으로 해당 위치의 값을 변경한다
      if(board[nY][nX] === 1) {
        queue.push([nX, nY, cnt + 1]);
        board[nY][nX] = 3;
      }
    }
  }
  
  // 값이 나오기도 전에 반복문을 나왔다는 것은 개수가 없다는 의미로 0을 리턴한다
  return 0;
}

console.log(solution([[1,1,7,4],[3,2,5,5],[4,3,6,9],[2,6,8,8]], 1, 3, 7, 8));    // 17