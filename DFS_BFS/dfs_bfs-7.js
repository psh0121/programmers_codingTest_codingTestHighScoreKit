// https://school.programmers.co.kr/learn/courses/30/lessons/84021

// findPieceInfo - 보드안에 담겨있는 도형의 정보를 bfs를 사용해 추출
// 파라미터 - 도형정보가 담긴 배열(board), game_board 또는 table 판별위한 타입정보(type)
// 리턴 - 보드안에 담겨있는 도형 정보
let findPieceInfo = (board, type) => {
  let result = [];
  let figureInfo = [];  // 도형 정보
  
  // typeNum - type에 따른 입력값 설정
  let typeNum = type === "GB" ? 0 : 1;
  
  // dy, dx - 상하좌우
  let dy = [-1, 1, 0, 0];
  let dx = [0, 0, -1, 1];
  
  let needVisit = [];  // bfs를 위한 임시거처
  
  // bfs
  // board를 순환하여 조각을 핮아 도형의 모양을 파악한 후 (figureInfo에 담는다)
  // 한 도형에 대한 분석이 끝나면 result에 figureInfo를 넣은 후 초기화한다
  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board.length; j++) {
      if(board[i][j] === typeNum) {  // 도형의 일부분일 경우
        needVisit.push([i, j]);  // needVisit에 정보담기
        
        while(needVisit.length !== 0) {
          let node = needVisit.shift();
          let [row, col] = node;
          
          // 만약 figureInfo에 넣으려는 정보가 담겨있을 경우엔 다음과정이 실행되지 않도록 조건문 안에 넣어준다
          if(!figureInfo.map(val => String(val)).includes(`${row},${col}`)) {
            figureInfo.push([row, col]);
            
            // 한번 방문한 값은 재방문을 하지 않기 위해 새로운값으로 대체
            board[row][col] = 3;
            
            // 다음위치 설정
            for(let k = 0; k < 4; k++) {
              if(
                row + dy[k] >= 0 &&
                row + dy[k] < board.length &&
                col + dx[k] >= 0 &&
                col + dx[k] < board.length &&
                board[row + dy[k]][col + dx[k]] === typeNum
              ) needVisit.push([row + dy[k], col + dx[k]]);
            }
          }
        }
        
        result.push(figureInfo);
        figureInfo = [];
      }
    }
  }
  
  return result;
}

// resetPieceInfo - findPieceInfo를 통해 얻은 도형의 정보를 쉽게 대조할 수 있도록 도형에 대한 정보를 일정한 위치에 대한 정보로 변환
// 파라미터 - findPieceInfo를 통해 얻은 도형정보 배열(infoArr)
// 리턴 - 위치값을 재설정한 도형의 정보
let resetPieceInfo = (infoArr) => {
  let result = infoArr.map(row => row.map(col => col));
  
  // findPieceInfo함수를 통해 얻은 정보는 table기반의 정보이기 때문에 game_board와 대조기에 문제가 발생
  // 그렇기 때문에 도형 하나를 일정한 칸 하나에 담겨있다고 생각하고 위치값을 재설정한다
  for(let i = 0; i < result.length; i++) {
    // min_ - _번째 값 중에서 가장작은 값
    let minY = Math.min(...result[i].map(el => el[0]));
    let minX = Math.min(...result[i].map(el => el[1]));
    
    for(let j = 0; j < result[i].length; j++) {
      result[i][j] = [result[i][j][0] - minY, result[i][j][1] - minX];
    }
  }
  return result;
}

// rotationRightDegree90 - 배열을 오른쪽으로 90도 회전
// 파라미터 - 배열(arr)
// 리턴 - 오른쪽으로 90도 회전한 배열정보
let rotationRightDegree90 = (arr) => {
  let result = [];
  let temp = [];
  
  for(let x = 0; x < arr.length; x++) {
    for(let y = arr.length - 1; y >= 0; y--) {
      temp.push(arr[y][x]);
      
      // 한줄이 다 채워졌을 경우 result에 값을 입력하고 temp를 초기화 한다
      if(temp.length === arr.length) {
        result.push(temp);
        temp = [];
      }
    }
  }
  
  return result;
}

function solution(game_board, table) {
  let result = 0;
  let tableInfo = resetPieceInfo(findPieceInfo(table, "TB"));  // 퍼즐 정보
  
  // fillGB - 게임보드를 tableInfo에 기반해 3으로 채우기
  // 파라미터 - x
  // 리턴 - 게임보드에 3을 채운 개수
  let fillGB = () => {
    let cnt = 0;
    
    // realGbInfo - 게임보드 위치에 기반한 도형정보들
    // gbInfo - realGbInfo에서 추출한 도형 정보를 (0, 0) 기준으로 도형 위치정보 재설정한 값
    let realGbInfo = findPieceInfo(game_board.map(row => row.map(col => col)), "GB");
    let gbInfo = resetPieceInfo(realGbInfo);
    
    // str__Info - 도형정보가 담긴 정보를 string형으로 변경한 값 (가독성과 배열 주소 특성을 이용하지 않기 위해)
    let strGbInfo = gbInfo.map(figures => figures.map(figure => String(figure)));
    let strTbInfo = tableInfo.map(figures => figures.map(figure => String(figure)));
    
    // 게임보드 정보를 기준으로 반복문을 돌려 테이블과 일치하는 도형이 있는지 파악한다
    for(let i = 0; i < strGbInfo.length; i++) {
      for(let j = 0; j < strTbInfo.length; j++) {
        if(strTbInfo[j] === null) continue;  // strTbInfo[j]안에 값이 없으면 pass
        
        // 서로비교하는 도형의 크기가 같을 경우
        if(strGbInfo[i].length === strTbInfo[j].length) {
          
          // 서로의 도형의 정보가 같을 경우(= 같은 도형일 경우)
          // => cnt값에 도형크기 추가
          // => 중복을 피하기 위해 table정보가 담긴 배열들에게 해당 인덱스 위치에 있는 값을 null 값으로 대체
          // => 게임보드에 토형채워넣기 (= 3으로 채워넣기)
          if(strGbInfo[i].length === strTbInfo[j].filter(val => strGbInfo[i].includes(val)).length) {
            cnt += strGbInfo[i].length;
            strTbInfo[j] = null;
            tableInfo[j] = null;
            realGbInfo[i].map(([y, x]) => game_board[y][x] = 3);
            
            // 이번판은 이미 도형을 채워넣기 때문에 다음 strTbInfo를 볼 필요가 없어 break
            break;
          }
        }
      }
    }
    
    // null 값으로 대체한 값들을 제외한 나머지 값들로 tableInfo를 재설정 해준다
    tableInfo = tableInfo.filter(val => val !== null);
    
    return cnt;
  }
  
  // 0도
  result += fillGB();
  
  // 90도
  game_board = rotationRightDegree90(game_board);  // 90도 회전 (= 90도)
  result += fillGB();
  
  // 180도
  game_board = rotationRightDegree90(game_board);  // 90도 회전 (= 180도)
  result += fillGB();
  
  // 270도
  game_board = rotationRightDegree90(game_board); // 90도 회전 (= 270도)
  result += fillGB();
  
  return result;
}

console.log(solution([[0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0], [1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1], [0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0], [0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0], [0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1], 
  [1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0], [0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1], [1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0], [0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0], [1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1], 
  [0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0], [1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0], [0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0], [1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1], [1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0], 
  [0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0], [0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0], [0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0]],
  [[1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0], [0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0], [1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1], [1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1], [1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1], 
  [0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0], [1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1], [0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0], [1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1], [1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0], 
  [1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0], [0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1], [1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1], [1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1], [0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0], 
  [1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1], [0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1], [0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1]]));  // 73

console.log(solution([[1,1,0,0,1,0],[0,0,1,0,1,0],[0,1,1,0,0,1],[1,1,0,1,1,1],[1,0,0,0,1,0],[0,1,1,1,0,0]],
  [[1,0,0,1,1,0],[1,0,1,0,1,0],[0,1,1,0,1,1],[0,0,1,0,0,0],[1,1,0,1,1,0],[0,1,0,0,0,0]]));    // 14