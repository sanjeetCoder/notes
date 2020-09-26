#include<iostream>
using namespace std;

template <class T>
class Addition
{
    public:
    T sum(T x,T y)
    {
        return x+y;
    }
};

int main()
{
    Addition<int> a1;
    Addition<double> a2;
    cout<<a1.sum(10,20);
    cout<<a2.sum(10.5,20.5);
}

