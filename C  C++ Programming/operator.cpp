#include<iostream>

using namespace std;
class Counter
{
    public:
    int count=0;

    void operator ++()
    {
        count=count+4;
    }
    void calculate()
    {
        cout<<"count value is :"<<count;
    }
};

int main()
{
    Counter c;
    cout<<c.calculate();
}
