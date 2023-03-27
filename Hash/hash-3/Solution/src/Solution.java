import java.util.Arrays;

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
