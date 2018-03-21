function knapSack(capacity, weights, values, n) { 
 
  var i, w, a, b, kS = []; 
 
  for (i = 0; i <= n; i++) { //{1} 
    kS[i] = []; 
  } 
 
  for (i = 0; i <= n; i++){ 
    for (w = 0; w <= capacity; w++){ 
      if (i == 0 || w == 0){ //{2} 
        kS[i][w] = 0; 
      } else if (weights[i-1] <= w){ //{3} 
        a = values[i-1] + kS[i-1][w-weights[i-1]]; 
        b = kS[i-1][w]; 
        kS[i][w] = (a > b) ? a : b; //{4} max(a,b) 
      } else{ 
        kS[i][w] = kS[i-1][w]; //{5} 
      } 
    } 
  } 
  return kS[n][capacity]; //{6} 
} 
