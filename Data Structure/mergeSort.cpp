
#include<iostream>
using namespace std;

int main(){
    int arr[]={50,20,90,70,100,80,60,10,40,30};
    int start,end;
    void mergeSort(int[],int,int);
    int n=sizeof(arr)/sizeof(arr[0]);
    start=0;
    end=n-1;
    mergeSort(arr,start,end);
    for(int i=0;i<10;i++){
        cout<<arr[i]<<" ";
    }
}
void mergeSort(int arr[],int start, int end){

    void finalMerge(int[],int,int,int);
    if(start<end){
       int mid=(start+end)/2;     // start=0, end=9, mid=4
       mergeSort(arr,start,mid);
       mergeSort(arr,mid+1,end);  // mid+1=1, end=9
       finalMerge(arr,start,mid,end);
    }

}
void finalMerge(int arr[],int start,int mid,int end){
    int i,j,k;
    int n1=mid-start+1;
    int n2=end-mid;
    int leftArr[n1];
    int rightArr[n2];
    for(int i=0;i<n1;i++){
        leftArr[i]=arr[start+i];
    }
    for(int j=0;j<n2;j++){
        rightArr[j]=arr[mid+1+j];
    }
    i=0;
    j=0;
    k=start;

    while(i<n1 && j<n2){
        if(leftArr[i]<=rightArr[j]){
            arr[k]=leftArr[i];
            i++;
        }
        else{
            arr[k]=rightArr[j];
            j++;
        }
        k++;
    }

    while(i<n1){
        arr[k]=leftArr[i];
        i++;
        k++;
    }
    while(j<n2){
        arr[k]=rightArr[j];
        j++;
        k++;
    }

}







