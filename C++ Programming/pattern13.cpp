#include<iostream>
using namespace std;

int main()
{
    int i,j;
    for(i=1;i<=9;i++)
    {
        for(j=1;j<=5;j++)
        {
            if(j>=10-i || j>=i)
            {
                cout<<"1";
            }
            else
            {
                cout<<" ";
            }
        }
        cout<<"\n";
    }

}
