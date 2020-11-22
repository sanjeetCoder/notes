#include<iostream>
#include<math.h>

using namespace std;

class Sum
{
private :
    int a;
    int b;
    int c;

public:
    void addition()
    {

        cout<<"Enter two numbers"<<endl;
        cin>>a>>b;
        c=a+b;
        cout<<"Sum is : "<<c;
    }
};
int main()
{
    Sum s1;
    s1.addition();


}

