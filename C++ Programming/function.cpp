#include<iostream>

using namespace std;

int main()
{
    int s;
  int sum(void);
  s=sum();
  cout<<s;


}
  int sum()
  {
      int a, b, c;
      cout<<"Enter two numbers"<<endl;
      cin>>a>>b;
      c=a+b;
      cout<<"sum is "<<c;
      return c;
  }

