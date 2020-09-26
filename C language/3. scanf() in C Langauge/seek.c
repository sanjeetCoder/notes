#include<stdio.h>

int main()
{
    FILE *f;
    f=fopen("file.txt","w+");

    fseek(f,8,SEEK_SET);
    fclose(f);
}
