#include<iostream>

using namespace std;
int main()
{
    int n,r,sum=0;
    cout<<"Enter a number"<<endl;
    cin>>n;
    while(n!=0)
    {
        r=n%10; //786%10=6  78%10  7%10    6  8  7
        sum=sum*10+r;//  6  68 687
        n=n/10; // 786/10  78/10  7/10 0
    }
    cout<<"Reverse is : "<<sum;

}
