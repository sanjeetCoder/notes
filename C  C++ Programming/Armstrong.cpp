#include<iostream>
using namespace std;

int main()
{
    int n,r,sum=0;
    cout<<"Enter a number"<<endl;
    cin>>n;
    t=n;
    while(n!=0)
    {
        r=n%10; 153%10 3 5 1
        sum=sum+r*r*r; 27+125+1=153
        n=n/10; 153/10 15/10 1
    }
    if(t==sum)
    {
        cout<<"Armstrong Number"<<endl;
    }
    else
    {
        cout<<"Not a Armstrong Number"<<endl;
    }
}
