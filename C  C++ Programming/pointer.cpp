#include<iostream>

using namespace std;
int main()
{
    int a=10,*p,**q;
    p=&a;
    q=&p;
    *p=a;
    cout<<p<<endl;
    cout<<q<<endl;
    cout<<*p<<endl;

}
