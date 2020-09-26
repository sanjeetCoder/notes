#include<stdio.h>
void main(){
   FILE *fp;
   int length;
    char c;
   fp = fopen("myfile.txt","r");


   while((c=fgetc(fp))!=EOF)
   {
       printf("%c",c);
   }
   rewind(fp);

   while((c=fgetc(fp))!=EOF)
   {
       printf("%c",c);
   }


   fclose(fp);
}
