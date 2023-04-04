// 이중우선순위 큐

// 이중 우선순위 큐는 다음 연산을 할 수 있는 자료구조를 말합니다.
// 명령어   수신 탑(높이)
// I 숫자	큐에 주어진 숫자를 삽입합니다.
// D 1	큐에서 최댓값을 삭제합니다.
// D -1	큐에서 최솟값을 삭제합니다.

// 이중 우선순위 큐가 할 연산 operations가 매개변수로 주어질 때, 
// 모든 연산을 처리한 후 큐가 비어있으면 [0,0] 
// 비어있지 않으면 [최댓값, 최솟값]을 return 하도록 solution 함수를 구현해주세요.

class Queue {
    constructor(){
        this.queue = [null];
    }

    insert(value){
        this.queue.push(value);

        let currentIndex = this.queue.length - 1;
        let parrentIndex = currentIndex - 1;

        // 앞에오는 값이 큰 값이 되도록 정렬한다.
        while(parrentIndex !== 0 && this.queue[parrentIndex] < value){
            this.queue[currentIndex] = this.queue[parrentIndex];
            this.queue[parrentIndex] = value;

            currentIndex = parrentIndex;
            parrentIndex = currentIndex - 1;
        }
    }

    minDel(){
        // null값만 있는 경우엔 0을 리턴하고 그외엔 작은 값을 리턴한다.
        if(this.queue.length === 1) return 0;

        return this.queue.splice(1, 1)[0];
    }

    maxDel(){
        // null값만 있는 경우엔 0을 리턴하고 그외엔 큰값을 리턴한다.
        if(this.queue.length === 1) return 0;

        return this.queue.pop();
    }

    returnValue(){
        // null값만 있는 경우엔 [0, 0]을 리턴하고 그 외엔 답을 리턴한다.
        if(this.queue.length === 1) return [0, 0];
        
        return [this.queue[1], this.queue[this.queue.length - 1]];
    }
}

function solution(operations) {
    let [minDel, maxDel] = ["D 1", "D -1"];

    // 큐 생성
    const queue = new Queue();

    for(const operation of operations){
        if(operation === minDel){
            queue.minDel();
        }
        else if(operation === maxDel){
            queue.maxDel();
        }
        else{
            queue.insert(Number(operation.split(" ")[1]));
        }
    }
    
    return queue.returnValue();
}

console.log(solution(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"]));  // [0, 0]
console.log(solution(["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"]));    // [333, -45]