
#include<stdio.h>
int main()
{
    int a, b,c;
    printf("Enter two numbers\n");
    scanf("%d%d",&a,&b);
    printf("before function call : %d %d \n",a,b);
    int sum(int *,int *);
    c=sum(&a,&b);
    printf("%d\n",c);
    printf("after function call : %d %d ",a,b);
}
int sum(int *x, int *y)
{
    int z;
    *x=*x+10;
    *y=*y+10;
    z=*x+*y;
    return z;
}
