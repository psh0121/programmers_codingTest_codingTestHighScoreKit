// https://school.programmers.co.kr/learn/courses/30/lessons/42628

class Queue {
    constructor() {
        this.queue = [];
    }

    insert(value) {
        this.queue.push(value);

        // 크기순으로 정렬하기 (오름차순 정렬)
        let childIdx = this.queue.length - 1;
        let parentIdx = childIdx - 1;

        // 자식노드의 인덱스가 음수가 아니고, 자식노드가 부모노드보다 값이 작을경우 두값의 위치를 변경한다
        // 이때 상위로 올라가면서 아래의 반복문을 돌려준다
        while(parentIdx >= 0 && this.queue[childIdx] < this.queue[parentIdx]) {
            [this.queue[childIdx], this.queue[parentIdx]] = [this.queue[parentIdx], this.queue[childIdx]];
            childIdx = parentIdx;
            parentIdx = childIdx - 1;
        }
    }

    deleteMin() {
        // 가장 작은 값인 0번째의 값을 삭제
        this.queue.shift();
    }

    deleteMax() {
        // 가장 큰 값인 맨 뒤의 값을 삭제
        this.queue.pop();
    }

    returnValue() {
        // 큐의 길이가 0일경우엔 [0,0]을 리턴하고
        if(!this.queue.length) return [0, 0];

        // 그렇지 않을 경우 [최댓값, 최솟값]을 리턴할 수 있도록 한다
        else return [this.queue[this.queue.length - 1], this.queue[0]];
    }
}
function solution(operations) {
    let q = new Queue();

    for(let i = 0; i < operations.length; i++) {
        // 명령어 안에 I가 포함되어 있다면 => insert
        if(operations[i].includes('I')) {
            let number = Number(operations[i].split(' ')[1]);
            q.insert(number);
        }
        // 명령어 안에 -1이 포함되어 있다면 => 가장 작은 값을 삭제
        else if(operations[i].includes('-1')) {
            q.deleteMin();
        }
        // 그외의 경우(D 1) => 가장 큰 값을 삭제
        else {
            q.deleteMax();
        }
    }

    return q.returnValue();
}

console.log(solution(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"]));  // [0, 0]