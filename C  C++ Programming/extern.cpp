#include<iostream>

using namespace std;
int a=0;
int main()
{

    extern int a;
    void storage(void);
    storage();
    storage();
    storage();

}
void storage()
{
   cout<<++a;
}
