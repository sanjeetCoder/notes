#include<iostream>
using namespace std;

int main()
{
    int i,j;
    for(i=1;i<=5;i++)
    {
        for(j=1;j<=9;j++)
        {
            if(j==5 || i==5 || j==6-i || j==4+i)
            {
                cout<<j;
            }
            else
            {
                cout<<" ";
            }
        }
        cout<<"\n";
    }
}
