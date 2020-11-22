#include<iostream>

using namespace std;

int main()
{
    int a,b,c;
    cout<<"Enter three number"<<endl;
    cin>>a>>b>>c;
    if(a>b && a>c)
    {
        cout<<"a is greater than b and c"<<endl;
    }

    else if(b>a && b>c)
    {
        cout<<"b is greater than a and c"<<endl;
    }

    else if(c>a && c>b)
    {
        cout<<"c is greater than a and b"<<endl;
    }
    else
    {
        cout<<"No condition satisfied"<<endl;
    }
}
