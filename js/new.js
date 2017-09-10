document.write("<table border='1'>");
for(var j=1; j<=10; j++){
    document.write("<tr>");
    for(var i=1; i<=10; i++){
        if((i === 1)|| (j === 1)) {
            document.write("<td bgcolor='#87cefa'>" + i * j + "</td>");
        } else
            document.write("<td >"+ i*j+ "</td>");
    }
    document.write('</tr>');
}
document.write("</table>");
