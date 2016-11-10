
function pairElement(str) {
  
  var answer = [],
      separated = str.split('');

  for (var i = 0; i < separated.length; i++) {
    
    var pair = [];
    
    switch (separated[i]) {
        
      case 'A':
        pair.push('A', 'T'); 
        break;
        
      case 'T':
        pair.push('T', 'A');
        break;
        
      case 'C': 
        pair.push('C', 'G');
        break;
        
      case 'G':
        pair.push('G', 'C');
        break;
        
    }
    
    answer.push(pair);
    
  }
  
  return answer;
  
}

pairElement("GCG");