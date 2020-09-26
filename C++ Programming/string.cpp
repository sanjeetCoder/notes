#include<iostream>
#include<cstring>

using namespace std;
int main()
{
  char name1[100]="sanjeet coder tutorial";
  char name2='c';
  char *p;
  p=strchr(name1,name2);
  cout<<p;

}
