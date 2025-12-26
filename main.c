#include <stdio.h>
#include <stdlib.h>
#include <time.h>

const char *i[] = { "heads" , "tails"};

int main () {
srand j = rand() % (sizeof(i) / sizeof(i[0]));
printf("%s\n", i[j]);
return 0;
}