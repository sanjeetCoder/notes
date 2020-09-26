#include<iostream>

using namespace std;
class Grandfather
{
    public:
    int age;
    string name;
    string address;
};

class Father : public Grandfather
{
    public:
    string service;
    float salary;
};


class Child : public Father
{
    public:
    void play()
    {
        cout<<"Playing"<<endl;
    }

};

int main()
{
   Child c1;
   Father f1;
   Grandfather g1;
   c1.age=20;
   c1.name="Sanjeet";
   c1.address="Delhi";
   c1.service="Developer";
   c1.salary=50000;
   c1.play();
   f1.age=45;
   f1.name="Om";
   f1.address="Delhi";
   f1.service="Business";
   f1.salary=70000;
   g1.age=70;
   g1.name="Shyam";
   g1.address="Delhi";
   cout<<"Child age "<<c1.age<<endl;
   cout<<"Child name "<<c1.name<<endl;
   cout<<"Child address "<<c1.address<<endl;
   cout<<"Child service "<<c1.service<<endl;
   cout<<"Child salary "<<c1.salary<<endl;
   cout<<"Father age "<<f1.age<<endl;
   cout<<"Father name "<<f1.name<<endl;
   cout<<"Father address "<<f1.address<<endl;
   cout<<"Father service "<<f1.service<<endl;
   cout<<"Father salary "<<f1.salary<<endl;
   cout<<"Grandfather age "<<g1.age<<endl;
   cout<<"Grandfather name "<<g1.name<<endl;
   cout<<"Grandfather address "<<g1.address<<endl;

}
