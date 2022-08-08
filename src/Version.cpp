
#include "Version.h"
#include <iostream>
using namespace std;

Version::Version()
{
  
}
Version::~Version()
{
}

void Version::get_version(char* version)
{
  unsigned int a, b, c;
      
  a = b= c = 0;
  H5get_libversion(&a, &b, &c);
  sprintf(version, "%d.%d", a,b);
  // cerr <<  "Version: " << version << endl;
}
