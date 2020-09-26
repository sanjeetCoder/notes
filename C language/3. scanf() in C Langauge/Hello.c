#include<stdio.h>

int main(){

    int a[3][3],b[3][3],c[3][3],m,n,i,j;
    printf("Enter number of rows and columns\n");
    scanf("%d%d",&m,&n);
    for(i=0;i<m;i++)
    {
        for(j=0;j<n;j++)
        {
            printf("Enter elements of matrix A\n");
            scanf("%d",&a[i][j]);
            printf("Enter elements of matrix B\n");
            scanf("%d",&b[i][j]);
            c[i][j]=a[i][j]+b[i][j];
        }
    }

    for(i=0;i<m;i++)
    {
        for(j=0;j<n;j++)
        {
            printf("%d",c[i][j]);
        }
        printf("\n");
    }
}





