#include <iostream>
using namespace std;
class BaseClass {
public:
   void disp(){
      cout<<"Function of Parent Class";
   }
};
class DerivedClass: public BaseClass{
public:

   void disp() {
      cout<<"Function of Child Class";
      BaseClass::disp();
   }
    void Eat() {
      cout<<"Function of Child Eating";
   }
};
int main() {
   /* Reference of base class pointing to
    * the object of child class.
    */
   DerivedClass obj;
   obj.disp();

   return 0;
}
