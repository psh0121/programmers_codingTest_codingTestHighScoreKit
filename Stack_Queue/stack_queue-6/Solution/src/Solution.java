// 주식가격

// 초 단위로 기록된 주식가격이 담긴 배열 prices가 매개변수로 주어질 때, 
// 가격이 떨어지지 않은 기간은 몇 초인지를 return 하도록 solution 함수를 완성하세요.

// 제한사항
// - prices의 각 가격은 1 이상 10,000 이하인 자연수입니다.
// - prices의 길이는 2 이상 100,000 이하입니다.

public class Solution {
	public static String solution(int[] prices) {
		String result = "";
		int[] answer = new int[prices.length];
        
        // 0으로 요소값을 채워넣는다.
        for(int i = 0; i < prices.length; i++){
            answer[i] = 0;
            
            // i값과 j값을 비교해 값을 채워넣는다.
            for(int j = i+1; j < prices.length; j++){
                answer[i]++;
                if(prices[j] < prices[i]) break;
            }
        }
        
        // 출력값 설정
       for(int i = 0; i < answer.length; i++) {
    	   if(i != answer.length - 1) result += answer[i] + ", ";
    	   else result += answer[i];
       }
        
        return "[" + result + "]";	
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] res = {1, 2, 3, 2, 3};
		
		System.out.println(solution(res));	// [4, 3, 1, 1, 0]
	}

}
