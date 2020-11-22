#include<iostream>

using namespace std;

class Father
{
    public:
    virtual void Eat()=0;
};

class Child:public Father
{
    public:
    void Eat()
    {
        cout<<"Eating bread"<<endl;
    }
};
int main()
{
  Father *f1;
  f1=new Child();
  f1->Eat();
}

