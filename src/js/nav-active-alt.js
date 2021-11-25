//jquery call for nav active 
//http://jsfiddle.net/j9rLn0q4/1/

//see if li.navButton  is required


function highlightCurrent() {

    //create a variable from the current pag's URL
    const curPage = document.URL;

    //and display in the console log
    console.log(curPage);

    //collect all elements tagged a in the doc
    const links = document.getElementsByTagName('a');
    
    //and create an array of the a elements
    for (let link of links) {

    //sort though the array to find one that matches curPage
    //and inject .current into the a object that does
      if (link.href == curPage) {
        link.classList.add("current");
      }
    }
  }


  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      highlightCurrent()
    }
  };