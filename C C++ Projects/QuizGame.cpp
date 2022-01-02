#include<iostream>

using namespace std;
int main(){
    int finalResult=0;
    char playAgain;
    int playQuiz(void);
    play:
    finalResult = playQuiz();
    cout<<"Your score is "<<finalResult<<endl;

    if(finalResult>=6){
        cout<<"You are pass"<<endl;
        cout<<"Do you want to play QUIZ again y or n?"<<endl;
        cin>>playAgain;
        if(playAgain=='y' || playAgain=='Y'){
        goto play;
        }
        else{
         cout<<"Thank you to play Quiz !"<<endl;
        }
    }
    else{
        cout<<"You are fail"<<endl;
        cout<<"Do you want to play QUIZ again y or n?"<<endl;
        cin>>playAgain;
        if(playAgain=='y' || playAgain=='Y'){
            playQuiz();
        }
        else{
         cout<<"Thank you to play Quiz !"<<endl;
        }
    }

}

int playQuiz(){
    char c;
    char option;
    int score=0;
    playInsideFunction:
    cout<<"----------Welcome to Quiz Game-------------"<<endl;
    cout<<"------Please follow the instructions------"<<endl;
    cout<<"Step 1 : Quiz contains total 10 questions"<<endl;
    cout<<"Step 2 : You will given 1 marks for each right ans"<<endl;
    cout<<"Step 3 : There will be no negataive marking"<<endl;
    cout<<"Step 4 : Please press s to start the quiz"<<endl;
    cout<<"Step 5 : Please select option a, b, c, d"<<endl;
     cout<<"Step 6 :If you score >=6 , you will pass the quiz"<<endl;
    cin>>c;
    if(c=='s' || c=='S'){
        cout<<"Q1. What is the capital of India"<<endl;
        cout<<"(a) Delhi (b) Mumbai (c) Kolkata (d)Chennai"<<endl;
        cin>>option;
        if(option=='a' || option=='A'){
            score=score+1;
        }
        else{
            score=score+0;
        }

        cout<<"Q2. Who is the prime minister of India"<<endl;
        cout<<"(a) Narendra Modi (b) Aditynath (c) Kejriwal (d)Nitin"<<endl;
        cin>>option;
        if(option=='a' || option=='A'){
            score=score+1;
        }
        else{
            score=score+0;
        }
        cout<<"Q3. What is the national bird of India"<<endl;
        cout<<"(a) Peacock (b) Sparrow (c) Pigeon (d)Parrot"<<endl;
        cin>>option;
        if(option=='a' || option=='A'){
            score=score+1;
        }
        else{
            score=score+0;
        }
        cout<<"Q4. What is the national animal of India"<<endl;
        cout<<"(a) Tiger (b) Lion (c) Zebra (d)Leopard"<<endl;
        cin>>option;
        if(option=='a' || option=='A'){
            score=score+1;
        }
        else{
            score=score+0;
        }
        cout<<"Q5. What is the national flower of India"<<endl;
        cout<<"(a) Lotus (b) Rose (c) Lily (d)Sunflower"<<endl;
        cin>>option;
        if(option=='a' || option=='A'){
            score=score+1;
        }
        else{
            score=score+0;
        }
        cout<<"Q6. Who is the chief minister of UP"<<endl;
        cout<<"(a) Aditynath (b) Kejriwal (c) Nitin (d)Raghunath"<<endl;
        cin>>option;
        if(option=='a' || option=='A'){
            score=score+1;
        }
        else{
            score=score+0;
        }

        cout<<"Q7. What is the capital of UP"<<endl;
        cout<<"(a) Lukhnow (b) Praygraj (c) Mirzapur (d)Itawa"<<endl;
        cin>>option;
        if(option=='a' || option=='A'){
            score=score+1;
        }
        else{
            score=score+0;
        }

        cout<<"Q8. What is the capital of Jharkhand"<<endl;
        cout<<"(a) Ranchi (b) Ramgarh (c) Plamu (d)Dhanbad"<<endl;
        cin>>option;
        if(option=='a' || option=='A'){
            score=score+1;
        }
        else{
            score=score+0;
        }

        cout<<"Q9.Who is the leader of Congress"<<endl;
        cout<<"(a) Rahul (b) Sonia (c) Roshan (d)Rohit"<<endl;
        cin>>option;
        if(option=='a' || option=='A'){
            score=score+1;
        }
        else{
            score=score+0;
        }
        cout<<"Q10. Which one of the following state comes in North"<<endl;
        cout<<"(a) Delhi (b) Banglore (c) Chennai (d)Kerla"<<endl;
        cin>>option;
        if(option=='a' || option=='A'){
            score=score+1;
        }
        else{
            score=score+0;
        }

    }
    else{
        cout<<"You have enterd wrong value, please enter s"<<endl;
        goto playInsideFunction;
    }
    return score;

}

