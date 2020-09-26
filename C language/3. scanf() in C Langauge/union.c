#include<stdio.h>

union student
{
    int id;
    char name[25];
    float marks;
    char city[25];
};

int main()
{
    union student s1;
    s1.id=1;
    printf("%d\n",s1.id);
    strcpy(s1.name,"sanjeet");
    printf("%s\n",s1.name);
    s1.marks=98;
    printf("%f\n",s1.marks);
    strcpy(s1.city,"delhi");
     printf("%s\n",s1.city);

}
