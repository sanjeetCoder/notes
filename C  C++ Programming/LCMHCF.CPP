#include<iostream>

using namespace std;
int main()
{
    int a,b,lcm,hcf,r,x,y;
    cout<<"Enter two numbers"<<endl;
    cin>>a>>b;
    x=a;
    y=b;
    while(true)
    {
        lcm=a;
        r=a%b;
        if(r==0){
            break;
        }
        a=a*2;
    }
    hcf=a*b/lcm;
    cout<<"LCM is : "<<lcm<<endl;
    cout<<"HCF is : "<<hcf;
}
