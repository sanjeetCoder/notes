package javaCoding;
import java.util.*;
public class user_input_max_element {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scan=new Scanner(System.in);
		int n=scan.nextInt();
		int a[]=new int[n];
		int max;
		for(int i=0;i<a.length;i++) {
			a[i]=scan.nextInt();
		}
		max=a[0];
		for(int i=0;i<a.length;i++) {
			if(max<a[i]) {
				max=a[i];
			}
		}
		System.out.println(max);

	}

}
