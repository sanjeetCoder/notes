#include<iostream>

using namespace std;

int main()
{
    int a[3][3];
    int b[3][3];
    int c[3][3];
    for(int i=0;i<3;i++)
    {
       for(int j=0;j<3;j++)
       {
           cout<<"Enter elements of matrix A"<<endl;
           cin>>a[i][j];
           cout<<"Enter elements of matrix B"<<endl;
           cin>>b[i][j];
           c[i][j]=a[i][j]+b[i][j];
       }
    }

    for(int i=0;i<3;i++)
    {
        for(int j=0;j<3;j++)
        {
            cout<<c[i][j];
        }
        cout<<"\n";
    }
}
