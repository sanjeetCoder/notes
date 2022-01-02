#include<iostream>

using namespace std;

int main(){
    int returTotalBill(void);
    int totalBill=returTotalBill();
    cout<<"Your total Bill Amount is "<<totalBill<<endl;
    cout<<"Thank you for you order !"<<endl;
}

int returTotalBill(){
    char c;
    char item;
    char vegItem;
    int billAmount=0;
    char selectAgain;
    char nonvegItem;
    cout<<"----------------Welcome to Online Food Order--------------"<<endl;
    cout<<"--------------Please follow below instructions-----------"<<endl;
    cout<<"Step 1 : Please press s to start your order"<<endl;
    cout<<"Step 2 : You can order both veg and nonveg item"<<endl;
    cout<<"Step 3 : Please press a to select veg item"<<endl;
    cout<<"Step 4 : Please press b to select noveg item"<<endl;
    cout<<"Step 5 : You will get your final Bill after your order"<<endl;
    start:
    cin>>c;
    if(c=='s' || c=='S'){
        items:
        cout<<"Please select your choice"<<endl;
        cout<<"(a)Veg Items                (b)Non Veg Items"<<endl;
        cin>>item;
        if(item=='a' || item=='A'){
            vegItemList:
            cout<<"Please select 1, 2, 3, 4, 5 as per your choice"<<endl;
            cout<<"(1) Paneer : Price : Rs-250"<<endl;
            cout<<"(2) Burger : Price : Rs-50"<<endl;
            cout<<"(3) Pizza : Price :  Rs-100"<<endl;
            cout<<"(4) Chowmin : Price : Rs-150"<<endl;
            cout<<"(5) Veg Roll : Price : Rs-100"<<endl;
            cin>>vegItem;
            if(vegItem=='1'){
                billAmount=billAmount+250;
            }
            else if(vegItem=='2'){
                billAmount=billAmount+50;
            }
            else if(vegItem=='3'){
                billAmount=billAmount+100;
            }
            else if(vegItem=='4'){
                billAmount=billAmount+150;
            }
             else if(vegItem=='5'){
                billAmount=billAmount+100;
            }
            else{
                cout<<"You have entered wrong value,please try again!"<<endl;
                goto vegItemList;
            }
          cout<<"Do you want to add more items, y or n?"<<endl;
          cin>>selectAgain;
          if(selectAgain=='y'){
              goto items;
          }
          else{
              return billAmount;
          }
        }
        else if(item=='b' || item=='B'){
           nonvegItemList:
            cout<<"Please select 1, 2, 3, 4, 5 as per your choice"<<endl;
            cout<<"(1) Chicken : Price : Rs-350"<<endl;
            cout<<"(2) Burger : Price : Rs-100"<<endl;
            cout<<"(3) Pizza : Price :  Rs-150"<<endl;
            cout<<"(4) Chowmin : Price : Rs-200"<<endl;
            cout<<"(5) Non Veg Roll : Price : Rs-200"<<endl;
            cin>>nonvegItem;
            if(nonvegItem=='1'){
                billAmount=billAmount+350;
            }
            else if(nonvegItem=='2'){
                billAmount=billAmount+100;
            }
            else if(nonvegItem=='3'){
                billAmount=billAmount+150;
            }
            else if(nonvegItem=='4'){
                billAmount=billAmount+200;
            }
             else if(nonvegItem=='5'){
                billAmount=billAmount+200;
            }
            else{
                cout<<"You have entered wrong value,please try again!"<<endl;
                goto nonvegItemList;
            }
          cout<<"Do you want to add more items, y or n?"<<endl;
          cin>>selectAgain;
          if(selectAgain=='y'){
              goto items;
          }
          else{
              return billAmount;
          }

        }
        else{
          cout<<"You have entered wrong value,please try again!"<<endl;
          goto items;
        }

    }
    else{
        cout<<"You have entered wrong value, please press s!"<<endl;
        goto start;
    }

   return billAmount;
}
