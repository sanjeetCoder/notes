#include<iostream>

using namespace std;
int main()
{
    int a, b,c,d;
    cout<<"Enter two numbers"<<endl;
    cin>>a>>b;
    int sum(int,int);
    d=sum(a,b);
    cout<<"Sum is "<<d;
}

int sum(int x, int y)
{
    int c;
    c=x+y;
    return c;
}
