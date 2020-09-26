#include<stdio.h>

int main(){
    int d;
    int a, b;
    printf("Enter two numbers\n");
    scanf("%d%d",&a,&b);

    int sum(int,int);
    d=sum(a,b);
    printf("%d ", d);

    return 0;
}

    int sum(int x, int y)
    {
        int z;
        z=x+y;

        return z;
    }



