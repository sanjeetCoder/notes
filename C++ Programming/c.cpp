#include<iostream>

using namespace std;

class Student
{
    public:
    string name;
    int id;
    float marks;
};

int main()
{
    Student s1;
    s1.name="sanjeet";
    s1.id=123;
    s1.marks=99.0;
    cout<<"Name : "<<s1.name<<endl;
    cout<<"Id : "<<s1.id<<endl;
    cout<<"Marks : "<<s1.marks<<endl;

}
