function ages(inp) {
	if (inp < 0) {
		console.log('out of bounds');
	} else if (inp >= 0 && inp <= 2) {
		console.log('baby');
	} else if (inp > 2 && inp <= 13) {
		console.log('child');
	} else if (inp > 13 && inp <= 19) {
		console.log('teenager');
	} else if (inp > 19 && inp <= 65) {
		console.log('adult');
	} else {
		console.log('elder');
	}
}
 
ages(20);