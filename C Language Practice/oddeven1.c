#include<stdio.h>

int main()
{
    int a=2,b=3,c=4;

    for(i=1;i<=10;i++)
    {
        printf("%d%d%d\n",a+=2,b+=3,c+=4);
    }
}
