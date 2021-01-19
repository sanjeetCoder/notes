package javaCoding;

public class maximum_element {

	public static void main(String[] args) {
		int a[]= {5,10,15,30,25,20};
		int max=a[0];
		int i;
		for(i=1;i<a.length;i++) {
			if(max<a[i]) {
				max=a[i];
			}
		}
		System.out.println(max);

	}
}
