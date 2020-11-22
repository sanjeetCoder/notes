#include<iostream>
using namespace std;

class constructor
{
    public:
    constructor()
    {
       cout<<"Constructor is invoked"<<endl;
    }
    ~constructor()
    {
      cout<<"Destructor is invoked"<<endl;
    }
};

int main()
{
    constructor s1=constructor();

}
