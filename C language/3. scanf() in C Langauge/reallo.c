#include<stdio.h>

int main()
{
    char *p;
    p=(char*)malloc(2);
    strcpy(p,"sanjeet");
    printf("%s",p);

    p=(char*)calloc(p,8);
    strcat(p, " coder");
    printf("%s",p);
    free(p);

}
