#include<stdio.h>
#include<stdlib.h>

using namespace std;
// Function Declaration
void add(void);
void Calculator(void);

int main()
{
    char a;
    int x=1;
    Calculator();
    while(x)
    {
    cin>>a;
    switch(a)
    {
    case '+':

        add();
        break;

    default:
        printf("Thanks for using our application\n");
        break;
    }
}
}
// Function Definition

     void Calculator()
     {
    printf("-------Welcome to Calculator App-------\n");
    printf("Please select your choice---------\n");
    printf("+ for addition\n");
    printf("- for subtraction\n");
    printf("* for multiplication\n");
    printf("/ for division\n");
    printf("%% for Modulo\n");
    }

     void add()
    {
        int p,q,r;
        char c;
        printf("Enter two numbers\n");
        scanf("%d%d",&p,&q);
        r=p+q;
        cout<<"Sum is %d\n",;
        cout<<"Do You want more operation to perform? y/n"<<endl;
        getc(c);
        if(c=='y' || c=='Y')
        {
            Calculator();
        }
        else
        {
            cout<<"Thanks for using our application\n"<<endl;
        }
    }


