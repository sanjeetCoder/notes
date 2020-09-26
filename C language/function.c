#include<stdio.h>

int main()
{
    int a, b, c,d;
    printf("Enter two numbers\n");
    scanf("%d%d",&a,&b);
    int sum(int,int);
    d=sum(a,b);
    printf("Sum is %d",d);
}

int sum(int x, int y)
{
    int z;
    z=x+y;
    return z;

}
