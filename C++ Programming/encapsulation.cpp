#include<iostream>

using namespace std;
class student
{
    private:
    int id;
    string name;
    string address;
    public:
    void setId(int id)
    {
        this->id=id;
    }
    int getId()
    {
        return this->id;
    }

    void setName(string name)
    {
        this->name=name;
    }
    string getName()
    {
        return this->name;
    }
    void setAddress(string address)
    {
        this->address=address;
    }
    string getAddress()
    {
        return this->address;
    }

};
int main()
{
    student s1;
    s1.setId(123);
    cout<<"Id is : "<<s1.getId()<<endl;
    s1.setName("Sanjeet");
    cout<<"Name is : "<<s1.getName()<<endl;
    s1.setAddress("Delhi");
    cout<<"Address is : "<<s1.getAddress()<<endl;
}
