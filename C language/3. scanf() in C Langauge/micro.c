#include <stdio.h>
#define PI 3.14
#define xy

void main() {

    int x=0;
   #ifdef input
   x=10;
   #endif
   #ifndef input
    x=20;
   #endif
   printf("%d",x);


}
