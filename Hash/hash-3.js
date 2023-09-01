// https://school.programmers.co.kr/learn/courses/30/lessons/42577?language=javascript

function solution(phone_book) {
    phone_book.sort();  // phone_book 정렬하기

    // phon_book의 양옆의 값을 비교하여 같으면 false를 리턴하도록 한다
    for(let i = 0; i < phone_book.length - 1; i++) {
        if(phone_book[i+1].startsWith(phone_book[i])) return false;
    }

    return true;
}

console.log(solution(["119", "97674223", "1195524421"]));   // false