#include <stdio.h>
#include <conio.h>
void main (){
   FILE *fp;
   int length;

   fp = fopen("file.txt", "r+");
   fseek(fp, , SEEK_SET);
   fputs("Programmer", fp);

   length = ftell(fp);

   fclose(fp);
   printf("Size of file: %d bytes", length);

}
