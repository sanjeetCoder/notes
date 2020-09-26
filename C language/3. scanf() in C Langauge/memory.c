#include<stdio.h>

int main()
{
    int *p;
    int a;
    int b;
    int sum=0;
    printf("Enter size of memory block");
    scanf("%d",&a);
    p=(int*)calloc(4,a);
    for(int i=0;i<4;i++)
    {
        printf("Enter number in memory block");
        scanf("%d",p+i);
        sum=sum+ *(p+i);
    }
    printf("sum is %d",sum);


    free(p);

}
