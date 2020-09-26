#include<stdio.h>

int main()
{
    FILE *f;
    char c[100];

    f=fopen("file.txt","r");
    printf("%s",fgets(c,50,f));
    fclose(f);
}
