#include<iostream>

using namespace std;
class Student
{
    public:
    int id;
    string branch;
    string address;
    Student(int id,string branch, string address)
    {
       this->id=id;
       this->branch=branch;
       this->address=address;
    }
};

class teacher
{
    public:
    Student* student;
    public:
    string name;
    string email;
    teacher(string name,string email, Student* student)
    {
        this->name=name;
        this->email=email;
        this->student=student;

    cout<<"Name : "<<this->name<<endl;
    cout<<"Email : "<<this->email<<endl;
    cout<<"Id : "<<this->student->id<<endl;
    cout<<"Branch: "<<this->student->branch<<endl;
    cout<<"Address : "<<this->student->address<<endl;
    }

};
int main()
{
    Student s1=Student(123,"Science","Delhi");
    teacher t1=teacher("Sanjeet","sanjeet@gmail.com",&s1);

}
