#include<iostream>

using namespace std;

class Father
{
    public:
    void Eat()
    {
        cout<<"Eating Rice"<<endl;
    }
};
class Child : public Father
{
    public:
    void Eat()
    {
        cout<<"Eating Bread"<<endl;
        Father::Eat();
    }
};

int main()
{
    Child c1;
    c1.Eat();
}
