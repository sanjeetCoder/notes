#include<iostream>
#include<fstream>
using namespace std;

int main()
{
    fstream f1;
    char ch;
    f1.open("abc.txt",ios::out);
    f1.close();
}
