#include<iostream>
using namespace std;

int main()
{
    int *p,sum=0,i;
    p=new int[5];
    delete []p;
    for(i=0;i<5;i++)
    {
        cin>>*(p+i);
        sum=sum+*(p+i);
    }

    cout<<sum;



}
