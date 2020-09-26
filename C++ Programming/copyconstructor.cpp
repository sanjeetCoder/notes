#include<iostream>

using namespace std;

class constructor
{
    public:
    int a;

    constructor(int x)
    {
       a=x;
    }

    constructor(const constructor &p)
    {
       a=p.a;
    }
};

int main()
{
   constructor c1= constructor(10);
   constructor c2=constructor(c1);
   cout<<c2.a;
}
