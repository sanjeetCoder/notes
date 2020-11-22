#include<iostream>
using namespace std;

class abc
{
    public:

    int &a;
    abc(int &a):a(a)
    {
        cout<<a;
    }
};
int main()
{
    abc a1=abc(6);
}
