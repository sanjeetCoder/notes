#include<iostream>

using namespace std;
int main()
{
    int a[5],sum=0,avg;
    cout<<"Enter your marks"<<endl;
    for(int i=0;i<=4;i++)
    {
        cin>>a[i];
        sum=sum+a[i];
    }
    avg=sum/5;
    cout<<"Average is "<<avg<<endl;
}
