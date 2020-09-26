#include<stdio.h>

int main()
{
    char name1[25];
    char name2[25];
    char *name3;
    printf("Enter name1\n");
    gets(name1);
    name3=strstr(name1,"sanjeet");
    printf("%s",name3);


}
