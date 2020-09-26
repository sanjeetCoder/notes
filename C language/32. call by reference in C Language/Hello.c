#include<stdio.h>

int main(){
    int d;
    int a, b;
    printf("Enter two numbers\n");
    scanf("%d%d",&a,&b);
    printf("before function call %d  %d \n", a, b);

    int sum(int*,int*);
    d=sum(&a,&b);
    printf("after function call %d  %d \n", a, b);
    printf("%d ", d);

    return 0;
}

    int sum(int *x, int *y)
    {
        int z;
        *x=*x+10;
        *y=*y+10;
        z=*x+*y;

        return z;
    }



