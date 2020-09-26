#include<stdio.h>

int main()
{
    int a,b;
    printf("Enter two numbers\n");
    scanf("%d%d",&a,&b);
    void sum(int *,int *);
    printf("Before function call a & b is %d\t%d\n",a,b);
    sum(&a,&b);
    printf("After function call a & b is %d\t%d\n",a,b);
}
void sum(int *x, int *y)
{
    int z;
    *x=*x+10;
    *y=*y+10;
    z=*x+*y;
    printf("Sum is %d\n",z);
}
