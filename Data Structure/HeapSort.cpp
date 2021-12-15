#include<iostream>
using namespace std;

int main()
{
    int arr[] = {30,35,20,25,10,15,5};
    void heapSort(int[],int);
    int n = sizeof(arr) / sizeof(arr[0]);
    heapSort(arr, n);
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
}
// heapSort method
void heapSort(int arr[], int n){

    void heapify(int[],int,int);
    for (int i = n / 2 - 1; i >= 0; i--){
        heapify(arr, n, i);
    }
    // Get element from heap
    for (int i = n - 1; i >= 0; i--) {

        // swap
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        heapify(arr, i, 0);
    }
}

//heapify method
void heapify(int arr[], int n, int i)
{
    int large = i; // largest
    int left = 2 * i + 1; // left child
    int right = 2 * i + 2; // right child
    // If left child is larger
    if (left < n && arr[left] > arr[large])
        large = left;
    // If right child is larger
    if (right < n && arr[right] > arr[large])
        large = right;
    // If root is not large
    if (large!= i) {

        int temp = arr[i];
        arr[i] = arr[large];
        arr[large] = temp;

        heapify(arr, n, large);
    }
}

