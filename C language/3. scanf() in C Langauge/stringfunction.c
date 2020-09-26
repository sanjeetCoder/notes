#include<stdio.h>

int main()
{
    char a[25];
    gets(a);
    printf("%d\n",strlen(a));
    printf("%s\n",strupr(a));
    printf("%s\n",strlwr(a));
    printf("%s\n",strrev(a));

}
