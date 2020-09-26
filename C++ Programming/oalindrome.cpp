#include<iostream>

using namespace std;
int main()
{
    int n,r,sum=0,t;
    cout<<"Enter a number :"<<endl;
    cin>>n;
    t=n;
    while(n!=0)
    {
        r=n%10;  678%10 8  67%10  7  6
        sum=sum*10+r;  8  870+6=876
        n=n/10; 678/10 67/10 6
    }
    if(t==sum)
    {
        cout<<"Palindrome number"<<endl;
    }
    else
    {
        cout<<"Not a Palindrome number"<<endl;
    }
}
