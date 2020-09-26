#include <stdio.h>
main(){
   FILE *f;
   char d[200];
   f = fopen("file.txt", "r");//opening file
   while(fscanf(f,"%s",d)!=EOF)
   {
       printf("%s ",d);
   }
   fclose(f);

   return 0;
}
