#include<iostream>

using namespace std;

class student
{
    public:
    string name;
    int id;
    float marks;
    student(int id,string name)
    {
        id=id;
        name=name;
        cout<<"Id is :"<<id<<endl;
        cout<<"Name is :"<<name<<endl;
    }

     student(int id,string name,float marks)
    {
        id=id;
        name=name;
        marks=marks;
        cout<<"Id is :"<<id<<endl;
        cout<<"Name is :"<<name<<endl;
        cout<<"Marks is :"<<marks<<endl;
    }
};
int main()
{
    student s1=student(123,"sanjeet");
    student s2=student(123,"sanjeet",99.0);
}
