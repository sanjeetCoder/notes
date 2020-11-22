#include<iostream>

using namespace std;
class Grandfather
{
    public:
    string service;
    float salary;
};

class Father: public Grandfather
{
    public:
    void Invest()
    {
        cout<<"Investing"<<endl;
    }
    void Earn()
    {
        cout<<"Earning"<<endl;
    }
};

class Mother : public Grandfather
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

class Child: public Father,public Mother
{
    public:
    void Play()
    {
        cout<<"Playing"<<endl;
    }
    void Read()
    {
        cout<<"Reading"<<endl;
    }
};
int main()
{
   Child c1;
   Mother m1;
   Father f1;
   Grandfather g1;
   c1.Father::service="Developer";
   m1.service="Trainer";
   f1.service="Teacher";
   g1.service="Business";
   c1.Mother::salary=50000;
   m1.salary=45000;
   f1.salary=40000;
   g1.salary=60000;
   c1.Invest();
   f1.Invest();
   c1.Earn();
   f1.Earn();
   m1.Teach();
   m1.Cook();
   c1.Teach();
   c1.Cook();
   c1.Play();
   c1.Read();
   cout<<"Child Service "<<c1.Father::service<<endl;
   cout<<"Mother Service "<<m1.service<<endl;
   cout<<"Father Service "<<f1.service<<endl;
   cout<<"Grandfather Service "<<g1.service<<endl;
   cout<<"Child Salary "<<c1.Father::salary<<endl;
   cout<<"Mother Salary "<<m1.salary<<endl;
   cout<<"Father Salary "<<f1.salary<<endl;
   cout<<"Grandfather Salary "<<g1.salary<<endl;

}
