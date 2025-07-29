class Solution {
    public String reverseWords(String s) {
      String[] sArr = s.split(" +"); 
        //append using strinbuilder reverse of the string and trim 
		 StringBuilder sb = new StringBuilder();
		 for (int i = sArr.length-1; i >= 0; i--) {
			sb.append(sArr[i]);
			sb.append(" ");
		}
	    return sb.toString().trim();   
    }
}