sum = 0;
for (var i=1; i<=50; i++) {
    var a = i.split('').reverse().join('');
    if ( a !== i)
   // continue;
    document.write(a+'<br>');
}