#include<iostream>

using namespace std;

int main()
{
    int a,b,c;
    cin>>a>>b;
    try
    {
        if(b!=0)
        {
           c=a/b;
           cout<<"Divison is : "<<c;
        }
        else
        {
            throw "Divided by zero";
        }
    }
    catch(const char *e)
    {
       cout<<e;
    }
}
