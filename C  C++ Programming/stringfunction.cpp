#include<iostream>
#include<cstring>

using namespace std;
int main()
{
    char name[100]="sanjeet coder tutorial";
    char ch='c';
    char *p;
    p=strchr(name,ch);
    cout<<p;

}
