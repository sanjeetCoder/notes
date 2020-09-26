#include<iostream>
using namespace std;

int main()
{
    int a, b;
    void sum(int *,int *);
    cout<<"Enter two numbers"<<endl;
    cin>>a>>b;
    cout<<"Before function call value is " <<a<<" "<<b;
    sum(&a,&b);
     cout<<"After function call value is " <<a<<" "<<b;
}
void sum(int *x, int *y)
{
    int z;
    *x=*x+10;
    *y=*y+10;
    z=*x+*y;
    cout<<z<<endl;
}
