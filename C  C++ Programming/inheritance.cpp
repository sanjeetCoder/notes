#include<iostream>

using namespace std;
class Father
{
    public:
    int age;
    string name;
    string address;
    void eat()
    {
        cout<<"Eating"<<endl;
    }
};

class Child : public Father
{
    public:
    void run()
    {
        cout<<"Running"<<endl;
    }

    void play()
    {
        cout<<"Playing"<<endl;
    }
};

int main()
{
   Child c1;
   c1.age=20;
   c1.name="Sanjeet";
   c1.address="Delhi";
   c1.run();
   c1.play();
   c1.eat();
   cout<<"Age is "<<c1.age<<endl;
   cout<<"Name is "<<c1.name<<endl;
   cout<<"Address is "<<c1.address<<endl;


}
