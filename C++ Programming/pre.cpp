#include<iostream>
using namespace std;
#define includes
int main()
{
    int a=0;
#ifdef include
    a=10;
#endif // include
#ifndef include
a=20;
#endif // include
cout<<a;

}
