var calculate = function(s) {
    if(s == null) return 0;
        
    var result = 0;
    var sign = 1;
    var num = 0;
            
    var stack = []; 
    stack.push(sign);
            
    for(var i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if(c >= '0' && c <= '9') {
            num = num * 10 + (c - '0');
        } else if(c == '+' || c == '-') {
            result += sign * num;
            sign = stack[stack.length-1] * (c == '+' ? 1: -1); 
            num = 0;
                    
        } else if(c == '(') {
            stack.push(sign);
                    
        } else if(c == ')') {
            stack.pop();
        }
    }
        
    result += sign * num;
    return result;
}
