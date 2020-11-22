#include<iostream>
#include<fstream>
using namespace std;

int main()
{
    fstream f;
    char line[200];
    f.open("file.txt",ios::trunc);
    f<<"Welcome to India "<<endl;
    f.close();
}
