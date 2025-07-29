class Solution {
    public int strStr(String haystack, String needle) {
        //COUNT TILL THE LENGTH MINUS OF THE needle string length
        for (int i = 0; i < haystack.length() - needle.length() + 1; i++) {
			if(needle.charAt(0) == haystack.charAt(i)) {
				if(haystack.substring(i, needle.length()+i).equals(needle)) {
					return i;
				}
			}
		}
		 return -1;
    }
}