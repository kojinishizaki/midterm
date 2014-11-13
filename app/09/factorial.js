function factorial(x){
	if(x > 0 && x % 1 == 0){
		function fact(x) {
  		if (x <= 1)
    	return (1);
  		else
    	return (x * fact(x-1));
		}
	}
	else if(x > 0){
		xx = parseInt(x);
		function fact(xx) {
  		if (xx <= 1)
    	return (1);
  		else
    	return (xx * fact(xx-1));
		}
	}
	else if(x <= 0){
		return null;
	}
	else if(typeof(x) !== 'number'){
		return null;
	}
}
