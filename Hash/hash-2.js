// https://school.programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
    // participant와 completion을 정렬시킨 새로운 변수를 생성한다
    let sortParticipant = participant.sort();
    let sortcompletion = completion.sort();

    // 반복문을 통해 같은 인덱스위치에 다른 이름이 나올 경우 해당 위치에 있는 sortParticipant의 값을 리턴한다
    for(let i = 0; i < sortParticipant.length; i++) {
        if(sortParticipant[i] !== sortcompletion[i]) return sortParticipant[i];
    }

    return;
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));   // "leo"