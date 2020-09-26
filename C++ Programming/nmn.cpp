#include<iostream>
using namespace std;

int main()
{
    for(int i=1;i<=8;i++)
    {
        for(int j=1;j<=8;j++)
        {
            if(i==1 ||i==8||j==1||j==8)
            {
            cout<<"*";
            }
            else
            printf(" ");
        }
        cout<<"\n";
    }

    return 0;
}
