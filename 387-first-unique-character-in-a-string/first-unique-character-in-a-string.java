class Solution {
    public int firstUniqChar(String s) {
         Map<Character, Integer> charCount = new HashMap<>();
		 //Getordefault will check in charCount if value is present and its current count
		 for (char c : s.toCharArray()) {
			 charCount.put(c, charCount.getOrDefault(c, 0) + 1);
		 }
		 //count first non repeating char
		 for (int i = 0; i < s.length(); i++) {
			if(charCount.get(s.charAt(i)) == 1) {
				return i;
			}
		}
		 return -1;
    }
}