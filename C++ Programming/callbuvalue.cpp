#include<iostream>

using namespace std;
int main()
{
    int a, b;
    void sum(int,int);
    cout<<"Enter two numbers"<<endl;
    cin>>a>>b;
    sum(a,b);
}
sum(int x, int y)
{
    int z;
    z=x+y;
    cout<<"Sum is "<<z;
}
