#include<stdio.h>



int main()
{
    int input;
    char option;
    void add(void);
    void sub(void);
    void mul(void);
    void div(void);
    enter:
    printf("---------Welcome to myCalculator application\n");
    printf("Enter a for addition\n");
    printf("Enter s for subtraction\n");
    printf("Enter m for multiplication\n");
    printf("Enter d for division\n");
    printf("Enter e for exit\n");
    scanf("%c",&input);
    if(input=='a' || input=='A')
    {
        add();
        printf("Do you want to use app again...\n press y for yes otherwise n for No");
        scanf("%c",option);
        if(option=='y' || option=='Y')
        {
            goto enter;
        }
        else
        {
            printf("Thanks for using our app\n");
        }
    }

    else if(input=='s' || input=='S')
    {
        sub();
        printf("Do you want to use app again...\n press y for yes otherwise n for No");
        scanf("%c",option);
        if(option=='y' || option=='Y')
        {
            goto enter;
        }
        else
        {
            printf("Thanks for using our app\n");
        }
    }
    else if(input=='m' || input=='M')
    {
        mul();
        printf("Do you want to use app again...\n press y for yes otherwise n for No");
        scanf("%c",option);
        if(option=='y' || option=='Y')
        {
            goto enter;
        }
        else
        {
            printf("Thanks for using our app\n");
        }
    }
    else if(input=='d' || input=='D')
    {
        div();
        printf("Do you want to use app again...\n press y for yes otherwise n for No");
        scanf("%c",option);
        if(option=='y' || option=='Y')
        {
            goto enter;
        }
        else
        {
            printf("Thanks for using our app\n");
        }
    }
    else if(input=='e' || input=='E')
    {
        printf("Thanks to use our calculator\n");
    }
    else
    {
        printf("Invalid number, please try again...");
    }

}

void add()
{
    int a, b, c;
    printf("Enter two numbers\n");
    scanf("%d%d",&a,&b);
    c=a+b;
    printf("Sum is: %d ", c);
}

void sub()
{
    int a, b, c;
    printf("Enter two numbers\n");
    scanf("%d%d",&a,&b);
    c=a-b;
    printf("Sub is: %d ", c);
}

void mul()
{
    int a, b, c;
    printf("Enter two numbers\n");
    scanf("%d%d",&a,&b);
    c=a*b;
    printf("Mul is: %d ", c);
}

void div()
{
    int a, b, c;
    printf("Enter two numbers\n");
    scanf("%d%d",&a,&b);
    c=a/b;
    printf("Div is: %d ", c);
}
