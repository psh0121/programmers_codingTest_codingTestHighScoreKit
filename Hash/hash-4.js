// 위장

// 스파이들은 매일 다른 옷을 조합하여 입어 자신을 위장합니다.
// 예를 들어 스파이가 가진 옷이 아래와 같고 오늘 스파이가 동그란 안경, 
// 긴 코트, 파란색 티셔츠를 입었다면 다음날은 청바지를 추가로 입거나 
// 동그란 안경 대신 검정 선글라스를 착용하거나 해야 합니다.

// 종류 / 이름
// 얼굴 / 동그란 안경, 검정 선글라스
// 상의 / 파란색 티셔츠
// 하의 / 청바지
// 겉옷 / 긴 코트

// 스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 
// 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// - clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다.
// - 스파이가 가진 의상의 수는 1개 이상 30개 이하입니다.
// - 같은 이름을 가진 의상은 존재하지 않습니다.
// - clothes의 모든 원소는 문자열로 이루어져 있습니다.
// - 모든 문자열의 길이는 1 이상 20 이하인 자연수이고 알파벳 소문자 또는 '_' 로만 이루어져 있습니다.
// - 스파이는 하루에 최소 한 개의 의상은 입습니다.

function solution(clothes) {
    // 종류에 따라 한번은 착용해야 한다. -> 조합
    // nCr : ex) 얼굴종류 중에서 1개를 착용하거나 착용하지 않을 수 있다. => 2C1 + 2C0
    // 종류는 여러개일 수 있으며 이는 동시에 발생하기에 곱하기를 사용해야한다.
    // 최종값에서 하나도 입지 않을 경우가 포함되어 있으므로 -1을 해준다.
    let result = 1;
    let kindCnt = {};
    
    // 1. 의상 종류 파악
    for(let i = 0; i < clothes.length; i++){
        if(kindCnt[clothes[i][1]] === undefined) kindCnt[clothes[i][1]] = 1;
        else kindCnt[clothes[i][1]]++;
    }
    
    // 2. nCr 적용후 값 result에 누적
    for(let key in kindCnt){
        // nC1 + nC0
        result *= (kindCnt[key] + 1);
    }
    
    // 3. 하나도 착용하지 않았을 경우의 수 -1후 리턴
    return result - 1;
}

console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]));    // 5
console.log(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]));    // 3