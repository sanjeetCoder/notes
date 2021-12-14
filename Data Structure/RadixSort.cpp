#include<iostream>
using namespace std;

int main(){
    int arr[]={20,5,15,10,25};
    void radixSort(int[],int);
    int n=sizeof(arr)/sizeof(arr[0]);
    radixSort(arr,n);
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
}

void radixSort(int arr[],int n){
    // Max element
    void countSort(int[],int,int);
    int max=arr[0];
    for(int i=1;i<n;i++){
        if(max<arr[i]){
            max=arr[i];
        }
    }
    // Iteration for significant digits 1s,10s
    int p; // It's for place digits 1s,10s
    for(p=1;max/p>0;p*=10){
        countSort(arr,n,p);
    }

}

    // Count Sort

void countSort(int arr[],int n, int p){
    int count[10]={0};

    // Count values
    for(int i=0;i<n;i++){
        count[(arr[i]/p)%10]++;
    }
   // Cumulative Frequency
    for(int i=1;i<10;i++){
        count[i]+=count[i-1];
    }
    // Store sorted value in finalArr[]
    int finalArr[n+1];
    for(int i=n-1;i>=0;i--){
        finalArr[count[(arr[i] / p) % 10] - 1] = arr[i];
        count[(arr[i] / p) % 10]--;
    }
    // Put Array Values to actual array from finalArray
    for (int i = 0; i < n; i++){
        arr[i] = finalArr[i];

    }

}
