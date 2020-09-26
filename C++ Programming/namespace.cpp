#include<iostream>
using namespace std;

namespace ProjectA
{
    namespace TeamA
    {
        class A
        {
            public:
            int id;
            string name;
            void Play()
            {
                cout<<"Playing Cricket"<<endl;
            }
        };

    }

}

namespace ProjectB
{
    namespace TeamB
    {
        class B
        {
            public:
            int id;
            string name;
            void Play()
            {
                cout<<"Playing Football"<<endl;
            }
        };

    }

}
//using namespace ProjectA::TeamA;
int main()
{
   ProjectA::TeamA::A a1;
   ProjectB::TeamB::B b1;
   a1.Play();
   a1.id=10;
   a1.name="Sanjeet";
   b1.Play();
   b1.id=20;
   b1.name="Sandhya";
   cout<<"Id is :"<<a1.id<<endl;
   cout<<"Name is :"<<a1.name<<endl;
   cout<<"Id is :"<<b1.id<<endl;
   cout<<"Name is :"<<b1.name;
}
