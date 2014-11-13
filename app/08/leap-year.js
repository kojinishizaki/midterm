function leapYear(x){
	if(x <= 0){
		return false;
	}
	else if(x % 4 !== 0){
		return false;
	}
	else if(x % 100 ==0 && x % 400 !==0){
		return false;
	}
	else if(typeof(x) !== 'number'){
		return false;
	}
	else{
		return true;
	}
}
