#include<iostream>
#include<conio.h>
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
                cout<<"The divide value is :"<<c;
            }
            else
            {
                throw c;
            }
        }
        catch(const char *e)
        {
            cout<<e;
        }
        getch();
    }



