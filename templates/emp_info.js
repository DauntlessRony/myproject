/*-------------------------------------------------------------------*/
/*start: download button*/

/*

function download(file, text) {
  
    //creating an invisible element
    var element = document.createElement('a');
    element.setAttribute('href','data:text/plain;charset=utf-8,'+ encodeURIComponent(text));
    element.setAttribute('download', file);
  
    // Above code is equivalent to
    // <a href="path of file" download="file name">
  
    document.body.appendChild(element);
  
    //onClick property
    element.click();
  
    document.body.removeChild(element);
}
  
// Start file download.
document.getElementById("id-btn-download").addEventListener("click", function() {
    // Generate download of hello.txt 
    // file with some content
    var text = document.getElementById("id-div-print").value;
    var filename = "GFG.txt";
  
    download(filename, text);
}, false);
*/
/*end: download button*/
/*-------------------------------------------------------------------*/


/*-------------------------------------------------------------------*/
/*start: print button*/
function printdiv(printpage)
         {var headstr = "<html><head><title></title></head><body>";
         var footstr = "</body>";
         var newstr = document.all.item(printpage).innerHTML;
         var oldstr = document.body.innerHTML;
         document.body.innerHTML = headstr+newstr+footstr;
         window.print();
         document.body.innerHTML = oldstr;
         return false;}

/*end: print button*/
/*-------------------------------------------------------------------*/


