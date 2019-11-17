
window.onload = function(){
    document.querySelector("#menu_1").onclick = function() {generateTable('alphabetical'); };
    document.querySelector("#menu_21").onclick = function() { generateTable('greaterThanHundredMill'); }; 
    document.querySelector("#menu_22").onclick = function() { generateTable('betweenOneAndTwoMill'); }; 
    document.querySelector("#menu_31").onclick = function() { generateTable('greaterthanOneMillKm2America'); }; 
    document.querySelector("#menu_32").onclick = function() { generateTable('allCountriesAsia'); }; 
    document.querySelector("#menu_41").onclick = function() { generateTable('alphabetical'); }; 
    document.querySelector("#menu_42").onclick = function() { generateTable('Arabic'); }; 
    document.querySelector("#menu_43").onclick = function() { generateTable('Chinese'); }; 
    document.querySelector("#menu_44").onclick = function() { generateTable('French'); }; 
    document.querySelector("#menu_45").onclick = function() { generateTable('Hindi'); }; 
    document.querySelector("#menu_46").onclick = function() { generateTable('Korean'); }; 
    document.querySelector("#menu_47").onclick = function() { generateTable('Japanese'); }; 
    document.querySelector("#menu_48").onclick = function() { generateTable('Russian'); }; 
}
    
function generateTable(selection){
  let parsed;
  let x,lang;
  let valid = false;
  let subtitleText;
  let rows = 0;
  let table = document.querySelector("#outputTable");
  var tblExistingBody = table.querySelector("tbody");
  if (tblExistingBody) table.removeChild(tblExistingBody);
  let tableBody = document.createElement("tbody");
  main = document.querySelector(".main");
  
  x = countries.length;
  for(let i=0; i<x; i++){

    let row = document.createElement("tr");

    switch(selection){
      case 'alphabetical':
        generateTableRow(row, i);
        if(valid == false){
          subtitleText = document.createTextNode("List of Countries and Dependencies");
          main.prepend(changeSubtitle(subtitleText));
          valid = true;
        }
        x = 14;
        break;
      case 'greaterThanHundredMill':
        parsed = parseInt(countries[i].Population,10);
        if(parsed > 100000000){
          generateTableRow(row, i);  
          if(valid == false){
            subtitleText = document.createTextNode("List of Countries and Dependencies - Population greater than 100 million");
            main.prepend(changeSubtitle(subtitleText));
            valid = true;
          }
        };
        break;

      case 'betweenOneAndTwoMill':
        parsed = parseInt(countries[i].Population,10);
        if(parsed > 100000000 && parsed < 200000001){
          generateTableRow(row, i);  
          if(valid == false){
            subtitleText = document.createTextNode("List of Countries and Dependencies - Population between 1 and 2 million");
            main.prepend(changeSubtitle(subtitleText));
            valid = true;
          }
        };
        break;

      case 'greaterthanOneMillKm2America':
        parsed = parseInt(countries[i].AreaInKm2,10);
        if(parsed > 1000000 && countries[i].Continent === 'Americas'){
            generateTableRow(row, i);  
            if(valid == false){
            subtitleText = document.createTextNode("List of Countries and Dependencies - Area greater than 1 million Km2, Americas");
            main.prepend(changeSubtitle(subtitleText));
            valid = true;
          }
        }
        break;

      case 'allCountriesAsia':
          if(countries[i].Continent === 'Asia' && rows < 16){
            generateTableRow(row, i);   
            rows++;
            if(valid == false){
              subtitleText = document.createTextNode("List of Countries and Dependencies - All countries in Asia");
              main.prepend(changeSubtitle(subtitleText));
              valid = true;
            }
        };
        break;

      case 'Arabic':
          lang = countries[i].Name.Arabic;
          generateLangTable(row, i, lang);  
          if(valid == false){
            subtitleText = document.createTextNode("List of Countries and Dependencies - Country/Dep. Name in Arabic");
            main.prepend(changeSubtitle(subtitleText));
            valid = true;
          }
          x = 14;
        break;

      case 'Chinese':
          lang = countries[i].Name.Chinese;
          generateLangTable(row, i, lang);  
          if(valid == false){
            subtitleText = document.createTextNode("List of Countries and Dependencies - Country/Dep. Name in Chinese ( 中文 )");
            main.prepend(changeSubtitle(subtitleText));
            valid = true;
          }
          x = 14;
        break;

      case 'French':
          lang = countries[i].Name.Franch;
          generateLangTable(row, i, lang);  
          if(valid == false){
            subtitleText = document.createTextNode("List of Countries and Dependencies - Country/Dep. Name in French");
            main.prepend(changeSubtitle(subtitleText));
            valid = true;
          }
          x = 14;
        break;

      case 'Hindi':
          lang = countries[i].Name.Hindi;
          generateLangTable(row, i, lang);  
          if(valid == false){
            subtitleText = document.createTextNode("List of Countries and Dependencies - Country/Dep. Name in Hindi");
            main.prepend(changeSubtitle(subtitleText));
            valid = true;
          }
          x = 14;
        break;

      case 'Korean':
          lang = countries[i].Name.Korean;
          generateLangTable(row, i, lang); 
          if(valid == false){
            subtitleText = document.createTextNode("List of Countries and Dependencies - Country/Dep. Name in Korean");
            main.prepend(changeSubtitle(subtitleText));
            valid = true;
          } 
          x = 14;
        break;

      case 'Japanese':
          lang = countries[i].Name.Japanese;
          generateLangTable(row, i, lang); 
          if(valid == false){
            subtitleText = document.createTextNode("List of Countries and Dependencies - Country/Dep. Name in Japanese");
            main.prepend(changeSubtitle(subtitleText));
            valid = true;
          } 
          x = 14;
        break;

      case 'Russian':
          lang = countries[i].Name.Russian;
          generateLangTable(row, i, lang);  
          if(valid == false){
            subtitleText = document.createTextNode("List of Countries and Dependencies - Country/Dep. Name in Russian");
            main.prepend(changeSubtitle(subtitleText));
            valid = true;
          }
          x = 14;
        break;

      default:
        console.log("Hello World");

    };
    tableBody.appendChild(row);
   
  }

  table.appendChild(tableBody);
  event.preventDefault();
};


  function generateLangTable(text, i, lang) {
    text.appendChild(generateFlag(countries[i].Code));
    text.appendChild(generateTableCell(countries[i].Code));
    text.appendChild(generateTableCell(lang));
    text.appendChild(generateTableCell(countries[i].Continent));
    text.appendChild(generateTableCell(countries[i].AreaInKm2));
    text.appendChild(generateTableCell(countries[i].Population));
    text.appendChild(generateTableCell(countries[i].Capital));
};
    
  
    function generateTableRow(text, i) {
      text.appendChild(generateFlag(countries[i].Code));
      text.appendChild(generateTableCell(countries[i].Code));
      text.appendChild(generateTableCell(countries[i].Name.English));
      text.appendChild(generateTableCell(countries[i].Continent));
      text.appendChild(generateTableCell(countries[i].AreaInKm2));
      text.appendChild(generateTableCell(countries[i].Population));
      text.appendChild(generateTableCell(countries[i].Capital));
    };
     
    function generateTableCell (text) {
      let data = document.createElement("td");
      let dataTextNode = document.createTextNode(text);
      data.appendChild(dataTextNode);
      return data;
    };

    function generateFlag (text) {
      let lowerCaseText = text.toLowerCase();
      let data = document.createElement("td");
      let dataImageNode = document.createElement("img");
      let src = document.createAttribute("src");
      src.value = `./flags/${lowerCaseText}.png`
      dataImageNode.setAttributeNode(src);
      data.appendChild(dataImageNode);
      if(dataImageNode.onload) console.log("it exists");
      return data;
  };


  function changeSubtitle (text) {
    let subtitleExist = document.querySelector("#subtitle");
    main = document.querySelector(".main");
    if(subtitleExist) main.removeChild(subtitleExist);
    let subtitle = document.createElement("h4");
    subtitle.setAttribute("id", "subtitle");
    subtitle.appendChild(text); 
    return subtitle;
  };

