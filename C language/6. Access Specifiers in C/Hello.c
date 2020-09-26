#include<stdio.h>

int main(){
    int a=10;
    float f=10.5;
    double d=20.5;
    char c='c';

    printf("%i\n",a);
    printf("%f\n",f);
    printf("%e\n",f);
    printf("%g\n",f);
    printf("%f\n",d);
    printf("%lf\n",d);
    printf("%g\n",d);
    printf("%e\n",d);
    printf("%c\n",c);
    printf("%c\n",c);
    printf("%d\n",&a);
    printf("%p\n",&a);

    return 0;
}


