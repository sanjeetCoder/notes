package javaprogram;

public class bitwise {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int a=5;   // 0 1 0 1
		int b=6;   // 0 0 0 1
				  //  0 1 1 0
		System.out.println(a&b);
		System.out.println(a|b);
		System.out.println(a^b);
		System.out.println(-(~a));

	}

}
