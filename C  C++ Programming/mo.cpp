#include<iostream>
using namespace std;
class teacher
{
    protected:
    int a;

   teacher(int x)
    {
        a=x;
        cout<<a;
    }

};



int main()
{
    teacher s1=teacher(20);
}
