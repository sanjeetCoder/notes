#include<iostream>

using namespace std;

int main()
{
    int i;
    for(i=2;i<=20;i+=2)
    {
        if(i==10)
        {
            continue;
        }
        cout<<i<<endl;
    }
}
