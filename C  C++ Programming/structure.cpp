#include<iostream>

using namespace std;

union student
{
    int id;
    char name[30];
    float marks;
}s1;

int main()
{
   union student s1;
   cout<<"Enter your id "<<endl;
   cin>>s1.id;
   cout<<"Id is "<<s1.id<<endl;
   cout<<"Enter your name "<<endl;
   cin>>s1.name;
    cout<<"Name is "<<s1.name<<endl;
   cout<<"Enter your marks "<<endl;
   cin>>s1.marks;
   cout<<" Marks is"<<s1.marks<<endl;



}
