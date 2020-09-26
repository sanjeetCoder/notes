#include<stdio.h>

struct student
{
    int id;
    float marks;
    char name[25];
    char city[25] ;
}s1[5];

int main()
{
   int i;
   printf("Enter records of five students....\n");
   for(i=0;i<5;i++)
   {
       printf("Enter id: ");
       scanf("%d",&s1[i].id);

       printf("Enter name: ");
       scanf("%s",&s1[i].name);

       printf("Enter marks: ");
       scanf("%f",&s1[i].marks);

       printf("Enter city: ");
       scanf("%s",&s1[i].id);

   }
   printf("id \tname \t marks \t city \n");
   for(i=0;i<=4;i++)
   {
    printf("%d\t %s\t %f\t %s\n", s1[i].id,s1[i].name,s1[i].marks,s1[i].city);

   }


}
