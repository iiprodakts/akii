"use strict";

var vars = [];
var route = '/user/:id/:action'.replace(/([:*])(\w+)/g, function (full, dot, name) {
  console.log('The value of full');
  console.log(full);
  console.log('The value of dot');
  console.log(dot);
  console.log('The value of name');
  console.log(name);
  vars.push(name);
  return '([^\/]+)';
});
console.log('The value of route');
console.log(route);
console.log(vars);
var match = 'http://site.com/user/42/save'.match(new RegExp(route));
console.log('The match');
console.log(match);