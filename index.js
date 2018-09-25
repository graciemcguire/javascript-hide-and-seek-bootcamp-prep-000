function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  let rankedList = document.querySelectorAll('ul.ranked-list li');
  
  for(let i = 0; i < rankedList.length; i++){
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n;
    
  }
}

function deepestChild(){
  let nodes = document.querySelectorAll('#grand-node div');
  
  for (let i = 0; i < nodes.length; i++){
 
  if (!nodes.length){
   return false;
  }
  return nodes[nodes.length -1];
 }
}

// function deepestChild(id, element) {
//   var nodes = document.querySelectorAll(`#${id} ${element}`);
//   if(!nodes.length) return false;
//   return nodes[nodes.length-1];
// }