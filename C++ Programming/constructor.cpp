#include<iostream>

using namespace std;

class student
{
   public:
       string name;
       int id;
       float marks;
       student(int id,string name,float marks)
       {
           id=id;
           name=name;
           marks=marks;
           cout<<"Constructor is invoked"<<endl;
           cout<<"Name is :"<<name<<endl;
           cout<<"Id is :"<<id<<endl;
           cout<<"Marks is :"<<marks<<endl;
       }

};

int main()
{
    student s1=student(123,"sanjeet",99.0);
}
