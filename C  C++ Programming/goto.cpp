#include<iostream>

using namespace std;

int main()
{
    int age;
    eligible:
    cout<<"Enter your age"<<endl;
    cin>>age;
    if(age<18)
    {
        cout<<"You are not eligible for vote"<<endl;
        goto eligible;
    }
    else
    {
        cout<<"You are  eligible for vote"<<endl;
    }
}
