// 완주하지 못한 선수

// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 
// 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 
// 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
// 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// - 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
// - completion의 길이는 participant의 길이보다 1 작습니다.
// - 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
// - 참가자 중에는 동명이인이 있을 수 있습니다.

function solution(participant, completion) {
    // 1. 매개변수의 배열을 정렬시킨다.
    participant.sort();
    completion.sort();
    
    // 2. 반복문을 통해서 해당 인덱스 위치에 같은 값이 없다면 
    //    participant에 있는 참가차는 완주하지 못한 것이다.
    for(let i = 0; i < participant.length; i++){
      if(participant[i] !== completion[i]) return participant[i];
    }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));    // "leo"
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));    // "vinko"
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));    // "mislav"