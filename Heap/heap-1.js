// https://school.programmers.co.kr/learn/courses/30/lessons/42626?language=javascript

class MinHeap {
    constructor() {  // 생성자 함수
      this.heap = [];
    }
    
    // index값 가져오기
    getParentIdx(childIdx) {
      return Math.floor((childIdx - 1) / 2);
    }
    getLeftChildIdx(parentIdx) {
      return (parentIdx * 2) + 1;
    }
    getRightChildIdx(parentIdx) {
      return (parentIdx * 2) + 2;
    }
    
    // heap size
    size() {
      return this.heap.length;
    }
    
    // 두값 위치변경
    swap(idx1, idx2) {
      [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
    }
    
    // heap에 데이터 입력
    push(value) {
      this.heap.push(value);
      this.bubbleUp();
    }
    
    // 상단 노드 pop
    pop() {
      if(this.size() === 1) return this.heap.pop();
      if(this.size() === 0) return null;
      
      let value = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.bubbleDown();
      
      return value;
    }
    
    // 마지막 노드에서 출발해 최상단 노드까지 올라가 bubble up
    bubbleUp() {
      let childIdx = this.size() - 1;
      let parentIdx = this.getParentIdx(childIdx);
      
      // 자식노드가 부모노드보다 더 작은 값일경우 => 두 값의 위치를 변경한다
      while(this.heap[childIdx] < this.heap[parentIdx]) {
        this.swap(childIdx, parentIdx);

        // 상단으로 올라가기 위해 childIdx와 parentIdx의 값을 업데이트한다
        childIdx = parentIdx;
        parentIdx = this.getParentIdx(childIdx);
      }
    }
    
    // 최상단 노드에서 마지막 노드까지 내려가면서 bubble down
    bubbleDown() {
      let parentIdx = 0;
      let leftIdx = this.getLeftChildIdx(parentIdx);
      let rightIdx = this.getRightChildIdx(parentIdx);
      
      // (leftIdx가 heap의 마지막 인덱스 값을 넘기지 않고 왼쪽 자식노드값이 부모노드 값보다 작다) or
      // (rightIdx가 heap의 마지막 인덱스 값을 넘기지 않고 오른쪽 자식노드값이 부모노드 값보다 작다)
      // => 자식노드와 부모노드의 위치를 변경후, 하단으로 내려가기위해 childIdx와 parentIdx의 값을 업데이트한다
        while((leftIdx <= this.size() - 1 && this.heap[leftIdx] < this.heap[parentIdx]) ||
           (rightIdx <= this.size() - 1 && this.heap[rightIdx] < this.heap[parentIdx])) {
            if(this.heap[rightIdx] < this.heap[leftIdx] && rightIdx <= this.size() - 1) {
                this.swap(rightIdx, parentIdx);
                parentIdx = rightIdx;
                rightIdx = this.getRightChildIdx(parentIdx);
                leftIdx = this.getLeftChildIdx(parentIdx);
            }
            else {
                this.swap(leftIdx, parentIdx);
                parentIdx = leftIdx;
                rightIdx = this.getRightChildIdx(parentIdx);
                leftIdx = this.getLeftChildIdx(parentIdx);
            }
        }
    }
  }
  
  function solution(scoville, K) {
    let cnt = 0;
    let heap = new MinHeap();
    
    // scoville의 값을 heap에 넣는다
    scoville.forEach(el => heap.push(el));
    
    // heap의 0번째 값이 K보다 작고 사이즈가 1보다 클 동안 동작한다
    while(heap.heap[0] < K && heap.size() > 1) {
      let scoville1 = heap.pop();
      let scoville2 = heap.pop();
      let newScoville = scoville1 + (scoville2 * 2);
      
      heap.push(newScoville);
      
      cnt++;
    }
    
    return heap.heap[0] < K ? -1 : cnt;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7)); // 2