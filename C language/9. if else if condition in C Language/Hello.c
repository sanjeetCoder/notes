#include<stdio.h>

int main(){
    int a;
    printf("Enter a number\n");
    scanf("%d",&a);

    if(a>90 && a<=100 )
    {
       printf("A+ Grade");
    }
    else if(a>80 && a<=90)
    {
        printf("A Grade");
    }

    else if(a>70 && a<=80)
    {
        printf("B Grade");
    }

    else if(a>60 && a<=70)
    {
        printf("C Grade");
    }

    else if(a>50 && a<=60)
    {
        printf("D Grade");
    }

    else if(a>40 && a<=50)
    {
        printf("E Grade");
    }

    else
    {
    printf("Fail");
    }

    return 0;
}


