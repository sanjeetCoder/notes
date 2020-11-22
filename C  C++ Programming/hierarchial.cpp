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

class Child_A : public Father
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


class Child_B:public Father
{
    public:
    void Teach()
    {
        cout<<"Teaching"<<endl;
    }

    void Write()
    {
        cout<<"Writing"<<endl;
    }
};
int main()
{
   Child_A c1;
   Child_B c2;
   c1.service="Developer";
   c2.service="Designer";
   c1.salary=50000;
   c2.salary=45000;
   c1.Invest();
   c1.Play();
   c1.Read();
   c2.Invest();
   c2.Teach();
   c2.Write();
   cout<<"Child A Service "<<c1.service<<endl;
   cout<<"Child B Service "<<c2.service<<endl;
   cout<<"Child A Salary "<<c1.salary<<endl;
   cout<<"Child B Salary "<<c2.salary<<endl;

}
