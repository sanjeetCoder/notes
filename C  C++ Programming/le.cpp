#include<iostream>
using namespace std;

int main()
{
    int year;
    cout<<"Enter a year "<<endl;
    cin>>year;
    if(year%4==0 && year%400==0 && year%100==0)
    {
        cout<<"Leap Year"<<endl;
    }
    else if(year%4==0 && year%100==0 && year%400!=0)
    {
        cout<<"Not a Leap Year"<<endl;
    }
    else if(year%4==0 && year%400!=0 && year%100!=0)
    {
        cout<<"Leap Year"<<endl;
    }
    else
    {
        cout<<"Not Leap Year"<<endl;
    }
}
