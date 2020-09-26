#include<iostream>

using namespace std;

class Addition
{
    public:
    float sum(float a,int b)
    {
        return a+b;
    }
    int sum(int a,int b)
    {
        return a+b;
    }
};

int main()
{
   Addition a1;
   cout<<"Sum of two numbers is: "<<a1.sum(10.5f,20)<<endl;
   cout<<"Sum of two numbers is: "<<a1.sum(10,20)<<endl;
}
