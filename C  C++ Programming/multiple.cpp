#include<iostream>

using namespace std;
class Father
{
    public:
    string service;
    float salary;
    void Invest()
    {
        cout<<"Investing"<<endl;
    }
};

class Mother
{
    public:
    void Teach()
    {
        cout<<"Teaching"<<endl;
    }

    void Cook()
    {
        cout<<"Cooking"<<endl;
    }
};

class Child:public Father,public Mother
{
    public:
    void play()
    {
        cout<<"Playing"<<endl;
    }

    void study()
    {
        cout<<"studying"<<endl;
    }
};

int main()
{
 Child c1;
 Mother m1;
 Father f1;
 c1.service="Developer";
 c1.salary=50000;
 c1.Invest();
 c1.Teach();
 c1.Cook();
 c1.play();
 c1.study();
 m1.Teach();
 f1.salary=70000;
 cout<<"Service :"<<c1.service<<endl;
 cout<<"Child Salary :"<<c1.salary<<endl;
 cout<<"Father Salary :"<<f1.salary<<endl;
}
