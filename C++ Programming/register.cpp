#include<iostream>

using namespace std;

int main()
{

    void storage(void);
    storage();
    storage();
    storage();

}
void storage()
{
   register int a=0;
   cout<<++a;
}
