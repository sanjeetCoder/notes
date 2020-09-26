#include<iostream>
using namespace std;

class abc
{
    public:
    int a;
    abc(int a):a(a)
    {
       cout<<a*10;
    }
};
int main()
{
   abc a1=abc(10);
}
