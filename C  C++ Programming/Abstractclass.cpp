#include<iostream>
using namespace std;

class Father
{
    public:
    virtual void Eat()=0;
};
class ChildA:public Father
{
    public:
    void Eat()
    {
        cout<<"Eating Bread..."<<endl;
    }
};

class ChildB:public Father
{
    public:
    void Eat()
    {
        cout<<"Eating Rice..."<<endl;
    }
};
int main()
{
Father *f1,*f2;
f1=new ChildA();
f2=new ChildB();
f1->Eat();
f2->Eat();
}

