package javaCoding;

public class reverse_strings {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int i ;
		String str="I am Sanjeet Coder"; 

		for(i=str.length()-1;i>=0;i--){
		if(str.charAt(i)==' ')
		{
		System.out.print("@");
		}
		else{
		System.out.print(str.charAt(i));
		}
		}

	}

}
