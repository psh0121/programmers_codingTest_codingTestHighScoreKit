import java.util.Arrays;

// 전화번호부에 적힌 전화번호 중, 한 번호가 다른 번호의 접두어인 경우가 있는지 확인하려 합니다.
// 전화번호가 다음과 같을 경우, 구조대 전화번호는 영석이의 전화번호의 접두사입니다.

// - 구조대 : 119
// - 박준영 : 97 674 223
// - 지영석 : 11 9552 4421

// 전화번호부에 적힌 전화번호를 담은 배열 phone_book 이 solution 함수의 매개변수로 주어질 때, 
// 어떤 번호가 다른 번호의 접두어인 경우가 있으면 false를 
// 그렇지 않으면 true를 return 하도록 solution 함수를 작성해주세요.

//제한 사항
// - phone_book의 길이는 1 이상 1,000,000 이하입니다.
// - 각 전화번호의 길이는 1 이상 20 이하입니다.
// - 같은 전화번호가 중복해서 들어있지 않습니다.

public class Solution {
	
	public static boolean solution(String[] phone_book) {
		boolean answer = true;
        
        // 1. phone_book을 정렬한다.
        Arrays.sort(phone_book);
        
        // 2. 순서대로 정렬한 배열의 i번째와 i+1를 비교해 접두사인지 확인한다.
        for(int i = 0; i < phone_book.length - 1; i++){
            if(phone_book[i+1].startsWith(phone_book[i])){
                answer = false;
                break;
            }
        }
        
        return answer;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String[] res1 = new String[3];
		res1[0] = "119";
		res1[1] = "97674223";
		res1[2] = "1195524421";
		
		String[] res2 = new String[3];
		res2[0] = "123";
		res2[1] = "456";
		res2[2] = "789";
		
		String[] res3 = new String[5];
		res3[0] = "12";
		res3[1] = "123";
		res3[2] = "1235";
		res3[3] = "567";
		res3[4] = "88";
		
		System.out.println(solution(res1));	// false
		System.out.println(solution(res2));	// true
		System.out.println(solution(res3));	// false
	}

}
