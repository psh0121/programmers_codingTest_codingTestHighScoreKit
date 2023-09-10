// https://school.programmers.co.kr/learn/courses/30/lessons/42839?language=javascript

function solution(numbers) {
    let num = [...numbers];

    // 순열로 배열 num으로 만들수 있는 모든 숫자 만들어보기
    function permutation(arr, selectNum) {
        let result = [];
        // n개중에서 1개 선택시(nC1) 모든 배열의 원소 리턴한다
        if(selectNum === 1) return arr.map(el => [el]);

        // 하나를 고정하고 그외의 나머지를 재귀함수 permutation을 돌려 구성하는 방식
        arr.forEach((fixed, idx, origin) => {
            // fixed를 제외한 나머지 arr
            let rset = origin.filter((val, i) => idx !== i);

            // fixed를 제외한 나머지 배열과 selectNum을 재귀에 돌려 나머지 조합을 파악한다
            let combinations = permutation(rset, selectNum - 1);

            // fixed와 나머지 조합을 붙여서 만든뒤 result에 push 한다
            let attached = combinations.map(el => [fixed, ...el]);
            
            result.push(...attached);
        })

        return result;
    }

    // 소수 판별하기
    function checkPrime(num) {
        let start = 2;

        while(start <= Math.sqrt(num)) {
            if(num % start++ === 0) return false;
        }

        return num > 1;
    }

    let onlyPrimeArr = [];

    // selectNum개수를 반복문 i를 기준으로 돌린다음 각 element를 정수로 바꾼뒤 소수인지를 확인한후
    // 소수일경우 onlyPrimeArr에 값을 넣는다
    for(let i = 1; i <= num.length; i++) {
        permutation(num, i).map(el => Number(el.join('')))
                .forEach(value => {
                    checkPrime(value) ? onlyPrimeArr.push(value) : onlyPrimeArr;
                })
    }

    // 중복값을 제거한 후 배열의 길이값을 리턴한다
    return [...new Set(onlyPrimeArr)].length;
}

console.log(solution('17')); // 3