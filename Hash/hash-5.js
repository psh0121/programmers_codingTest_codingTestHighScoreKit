// https://school.programmers.co.kr/learn/courses/30/lessons/42579

function solution(genres, plays) {
    let result = [];
    let songObj = {};   // 장르: [[횟수, 고유번호], ...]
    let sortGenres = [];    // [장르, 총 재생횟수]

    genres.forEach((el, i) => {
        if(!songObj[el]) songObj[el] = [[plays[i], i]];
        else songObj[el].push([plays[i], i]);
    })

    // songObj안에 장르별 재생횟수 순으로 정렬
    for(let key in songObj) {
        songObj[key].sort((a, b) => {
            if(a[0] === b[0]) return a[1] - b[1];
            else return b[0] - a[0];
        })
    }

    for(let key in songObj) {
        let sumSong = songObj[key].reduce((acc, val) => acc + val[0], 0);
        sortGenres.push([key, sumSong]);
    }

    // 높은 재생횟수 순으로 sortGenres 정렬
    sortGenres.sort((a, b) => b[1] - a[1]);

    for(let [g, ts] of sortGenres) {
        for(let i = 0; i < songObj[g].length; i++) {
            if(i === 2) break;
            result.push(songObj[g][i][1]);
        }
    }

    return result;
}

console.log(solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]));    //[4, 1, 3, 0]