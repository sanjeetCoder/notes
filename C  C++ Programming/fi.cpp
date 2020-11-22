#include<iostream>
#include<fstream>

using namespace std;
int main()
{
    fstream f1;
    char c;
    f1.open("abc.txt",ios::in);
    cout<<f1.tellg();
    f1.seekp(-5,ios::end);
    cout<<f1.tellp();
    f1.seekp(2,ios::cur);
    cout<<f1.tellp();
    f1.close();
}
