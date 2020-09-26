#include <iostream>
using namespace std;

class Test
{
   private:
      int count=4;

   public:

       void operator ++()
       {
          count = count+1;
       }
       void Display() { cout<<"Count: "<<count; }
};

int main()
{
    Test t;
    // this calls "function void operator ++()" function

    t.Display();
    return 0;
}
