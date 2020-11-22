#include<iostream>

using namespace std;

int main()
{
    int a,b;
    cout<<"Enter a number"<<endl;
    cin>>a;
    if(a>10)
    {
        if(a==15)
        {
         cout<<"Enter a number again"<<endl;
         cin>>b;
         cout<<"value of b is "<<b;
         if(b>20)
         {
             cout<<"b is greater than 20 "<<endl;
         }
         else
         {
             cout<<"b is less than 20 "<<endl;
         }

        }
    }
}
