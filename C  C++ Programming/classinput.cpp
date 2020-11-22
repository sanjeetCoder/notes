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
    cout<<"Enter your name , id, marks"<<endl;
    cin>>s1.name>>s1.id>>s1.marks;
    cout<<"Name :"<<s1.name<<endl;
    cout<<"Id :"<<s1.id<<endl;
    cout<<"Marks :"<<s1.marks<<endl;
}
