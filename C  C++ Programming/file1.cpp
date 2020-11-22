#include<iostream>
#include<fstream>

using namespace std;
int main()
{
    fstream f1;
    char *ch;
    f1.open("abc.txt",ios::in);

    while(f1)
    {
        f1.get(ch);
        cout<<ch;
    }
    f1.close();
}

