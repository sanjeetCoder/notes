#include<iostream>

using namespace std;
int main()
{
    int a;
    cout<<"Enter a number"<<endl;
    cin>>a;
    switch(a)
    {
    case 10:
        cout<<"Entered value is 10"<<endl;


    case 20:
        cout<<"Entered value is 20"<<endl;


    case 30:
        cout<<"Entered value is 30"<<endl;


    default:
        cout<<"Entered value does not match"<<endl;
        break;
}
}
