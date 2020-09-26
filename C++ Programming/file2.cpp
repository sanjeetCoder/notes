#include<iostream>
#include<fstream>
using namespace std;

int main()
{
    fstream f;
    char c[20];
    f.open("file.txt",ios::in);
    cout<<f.tellp();
    f.seekp(0,ios::end);
    cout<<f.tellg();
    f.close();
}
