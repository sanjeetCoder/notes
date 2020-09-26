#include<iostream>
using namespace std;

int main()
{
    int *p,i,sum=0;
    p=new int[5];
    delete []p;
    cout<<"Enter five number"<<endl;
    for(i=0;i<5;i++)
    {
        cin>>*(p+i);
        sum=sum+*(p+i);
    }
    cout<<"Sum is "<<sum;


}
