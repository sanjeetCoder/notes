#include<stdio.h>

struct student
{
    int id;
    float marks;
    char name[25];
    char city[25];
};
int main()
{
    struct student s1[5];
    int i;
    printf("Enter details of five students\n");

    for(i=0;i<5;i++)
    {
        printf("Enter id: ");
        scanf("%d",&s1[i].id);

        printf("Enter marks: ");
        scanf("%f",&s1[i].marks);

        printf("Enter name: ");
        scanf("%s",&s1[i].name);

        printf("Enter city: ");
        scanf("%s",&s1[i].city);
    }
    printf("id \t marks\t name\t\t city\n ");
    for(i=0;i<5;i++)
    {
        printf("%d \t %f \t\t %s \t\t %s\n", s1[i].id, s1[i].marks,s1[i].name,s1[i].city);
    }
}
