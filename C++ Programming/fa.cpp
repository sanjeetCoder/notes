#include<iostream>

using namespace std;
int main()
{
  int n,i,f;
  cin>>n;
  f=n;
  for(i=1;i<n;i++)
  {
      cout<<f<<"*"<<i<<"=";
      f=f*i;
      cout<<f<<endl;
  }

}
