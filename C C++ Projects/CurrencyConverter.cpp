#include<iostream>

using namespace std;

int main(){
    char startValue;
    char selectAgain;
    float converter(void);
    start:
    cout<<"**********Welcome to Currency Converter Application************"<<endl;
    cout<<"*********Please follow the instruction***********"<<endl;
    cout<<"You can have currencies dollar,rupees,euro,pound"<<endl;
    cout<<"You can type a,b,c,d respectively for currencies dollar,rupees,euro,pound"<<endl;
    cout<<"Enter currency1 which you want to convert"<<endl;
    cout<<"Enter value for currency1"<<endl;
    cout<<"Enter currency2 in which you want to convert currency1"<<endl;
    cout<<"(a) dollar (b) rupees (c) euro (d) pound"<<endl;
    cout<<"Please press s to start"<<endl;
    selectChoice:
    cin>>startValue;
    if(startValue=='s' || startValue=='S'){
        float finalValue=converter();
        cout<<"Result is "<<finalValue<<endl;
        cout<<"Do you want to use the application again?y or n"<<endl;
        typeAgain:
        cin>>selectAgain;
        if(selectAgain=='y' || selectAgain=='Y'){
            goto start;
        }
        else if(selectAgain=='n' || selectAgain=='N'){
            cout<<"Thank you for our application !"<<endl;
        }
        else{
            cout<<"You have entered wrong value , please type again"<<endl;
            goto typeAgain;
        }

    }
    else{
        cout<<"You have entered wrong value, please type s"<<endl;
        goto selectChoice;
    }
}

float converter(){
    char currName1;
    char currName2;
    float currency1;
    float currency2;
    currLevel:
    cout<<"Enter currency1 Name"<<endl;
    cin>>currName1;
    cout<<"Enter currency1 Value"<<endl;
    cin>>currency1;
    switch(currName1){
        case 'a':
            currLevel1:
            cout<<"Enter currency2 Name"<<endl;
            cin>>currName2;
            if(currName2=='a' || currName2=='A'){
                currency2=currency1*1;
            }
            else if(currName2=='b' || currName2=='B'){
                currency2=currency1*73.84;
            }
            else if(currName2=='c' || currName2=='C'){
                currency2=currency1*0.85;
            }
            else if(currName2=='d' || currName2=='D'){
                currency2=currency1*0.72;
            }
            else{
                cout<<"You have entered wrong value, please type again" <<endl;
                goto currLevel1;
            }
            break;

        case 'b':
            currLevel2:
            cout<<"Enter currency2 Name"<<endl;
            cin>>currName2;
            if(currName2=='a' || currName2=='A'){
                currency2=currency1*0.01;
            }
            else if(currName2=='b' || currName2=='B'){
                currency2=currency1*1;
            }
            else if(currName2=='c' || currName2=='C'){
                currency2=currency1*0.01;
            }
            else if(currName2=='d' || currName2=='D'){
                currency2=currency1*0.009;
            }
            else{
                cout<<"You have entered wrong value, please type again" <<endl;
                goto currLevel2;
            }

            break;

        case 'c':
            currLevel3:
            cout<<"Enter currency2 Name"<<endl;
            cin>>currName2;
            if(currName2=='a' || currName2=='A'){
                currency2=currency1*1.16;
            }
            else if(currName2=='b' || currName2=='B'){
                currency2=currency1*86.37;
            }
            else if(currName2=='c' || currName2=='C'){
                currency2=currency1*1;
            }
            else if(currName2=='d' || currName2=='D'){
                currency2=currency1*0.85;
            }
            else{
                cout<<"You have entered wrong value, please type again" <<endl;
                goto currLevel3;
            }

            break;

        case 'd':
            currLevel4:
            cout<<"Enter currency2 Name"<<endl;
            cin>>currName2;
            if(currName2=='a' || currName2=='A'){
                currency2=currency1*1.37;
            }
            else if(currName2=='b' || currName2=='B'){
                currency2=currency1*101.20;
            }
            else if(currName2=='c' || currName2=='C'){
                currency2=currency1*1.17;
            }
            else if(currName2=='d' || currName2=='D'){
                currency2=currency1*1;
            }
            else{
                cout<<"You have entered wrong value, please type again" <<endl;
                goto currLevel4;
            }

            break;

        default:{
                cout<<"You have entered wrong value, please type again" <<endl;
                goto currLevel;
                break;
        }
    }

    return currency2;
}







