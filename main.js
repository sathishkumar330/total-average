let array=[1,5,7,4,2,6,9,8];
function calulate(array){
var total=0;
var count++;
for(i=0;i<array.length;i++){
	
	total+=array[i];
	count++;
}
	return total/count;
}
	document.write(calculate(array));