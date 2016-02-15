/*
Looping a triangle

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

*/

function triangle (sym, size) {
  var line = ''
  for (var i = 0; i < size; i++) {
    line += sym;
    console.log(line);
  }
}

triangle('#', 7);