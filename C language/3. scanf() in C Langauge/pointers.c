#include<stdio.h>
int main()
{
    int a=10, *b, **c;
    b=&a;
    c=&b;
    printf("%d\n",a);
    printf("%u\n",b);
    printf("%u\n",c);

}
