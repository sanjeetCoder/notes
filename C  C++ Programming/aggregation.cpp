#include<iostream>
using namespace std;

class Teacher
{
    public:
    int id;
    string stream;
    string address;
    Teacher(int id,string stream,string address)
    {
        this->id=id;
        this->stream=stream;
        this->address=address;
    }
};

class Student
{
    public:
    Teacher *teacher;
    string name;
    string email;
    Student(string name,string email,Teacher *teacher)
    {
        this->name=name;
        this->email=email;
        this->teacher=teacher;

        cout<<"Name :"<<this->name<<endl;
        cout<<"Email :"<<this->email<<endl;
        cout<<"Id :"<<this->teacher->id<<endl;
        cout<<"Stream :"<<this->teacher->stream<<endl;
        cout<<"Address :"<<this->teacher->address<<endl;
    }

};
int main()
{
    Teacher t1=Teacher(123,"Science","Delhi");
    Student s11=Student("sanjeet","sanjeet@gmail.com",&t1);
}
