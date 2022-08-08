#include "Host.h"
#include <unistd.h>
#include <iostream>
#include <strings.h>
#include <string.h>
using namespace std;

Host::Host()
{
  
}
Host::~Host()
{
}


void Host::get_name(char* host)
{
  char* pch = NULL;

  if(gethostname(hostname, 128) == 0){
    pch = strtok(hostname, ".");
    strcpy(host, hostname);
  }
  else{
    strcpy(host, "localhost");
  }

}
