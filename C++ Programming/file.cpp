#include<iostream>
#include<fstream>
using namespace std;

int main()
{
    fstream f;
    char line[200];
    f.open("file.txt",ios::in);

    while(f)
    {
        f.getline(line,100);
        cout<<line;
    }
    f.close();
}
