#include<stdio.h>

enum week{sun=5,mon,tue,wed,thu,fri,sat};

int main()
{
    enum week day1, day2;
    day1=sun;
    day2=thu;
    printf("%d\n%d\n",day1,day2);

}
