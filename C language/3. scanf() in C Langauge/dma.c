#include<stdio.h>

int main()
{
    int *p;
    int a,sum=0;
    printf("Enter the size of memory block");
    scanf("%d",&a);
    p=(int*)calloc(a,sizeof(int));

    for(int i=0;i<a;i++)
    {
        scanf("%d",p+i);
        sum=sum+ *(p+i);

    }
    printf("%d",sum);

}
