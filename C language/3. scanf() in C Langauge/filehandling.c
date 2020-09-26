#include<stdio.h>

int main()
{
    FILE *f;
    char c;
    f=fopen("file.txt","r+");

    while((c=getc(f))!=EOF)
          {
              printf("%c",c);
          }

      rewind(f);

          while((c=getc(f))!=EOF)
      {
          printf("%c",c);
      }

    fclose(f);
}
