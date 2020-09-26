#include<stdio.h>

int main(){

    int a[5],sum=0,avg;
    printf("Enter five number\n");
    for(int i=0;i<=4;i++)
    {
        scanf("%d",&a[i]);
        sum=sum+a[i];
    }

    avg=sum/5;
    printf("Average is %d",avg);

    }





