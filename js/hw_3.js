var checkValidation = (()=>{
	let isNumeric;
	let	isInteger;
	let	isNegInt;
	let	isNonNegInt;
	let	isMN;
	let	isEmail;
	let	isNonEmpty;
	let	isMNL;
	let	isReg;
	let	isValid;
	let validity;

	let answer;
	let re = new RegExp("^([a-z0-9]{5,})$");

	let input1 = document.getElementById("inputs1").value;
	let input2 = document.getElementById("inputs2").value;
	let nn = document.getElementById("n").value;
	let mm = document.getElementById("m").value;
	console.log(input1)
	return {

		isNumeric () {
			console.log(Number(input1))
			answer = (Number(document.getElementById("inputs1").value)) ? true:false;
			document.getElementById("answer").innerHTML = "<h4>is numeric: " + answer + "</h4>";
		},

		isInteger () {
			answer =  (document.getElementById("inputs1").value % 1 ===0) ? true:false;
			document.getElementById("answer").innerHTML = "<h4>is integer: "+ answer + "</h4>";
		},
		
		isNegInt () {
			answer = ((document.getElementById("inputs1").value % 1 ===0) && (document.getElementById("inputs1").value)<0) ? true:false;
			document.getElementById("answer").innerHTML = "<h4>is negative integer: "+ answer + "</h4>";
		},

		isNonNegInt () {
			answer = ((document.getElementById("inputs1").value % 1 ===0) && (document.getElementById("inputs1").value)>0) ? true:false;
			document.getElementById("answer").innerHTML = "<h4>is non negative integer: "+ answer + "</h4>";
		},

		isMN () {
			if (n && m){
				answer = (document.getElementById("inputs2").value>=(document.getElementById("m").value) && (document.getElementById("inputs2").value)<=(document.getElementById("n").value)) ? true:false;
			}
			document.getElementById("answer").innerHTML = "<h4>is not less than m and not more than n: "+ answer + "</h4>";
		},

		isEmail () {
			answer = (document.getElementById("inputs1").value.length == 0)? false:true;
		    // Now validate the email format using Regex
		    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
		    answer = re.test(document.getElementById("inputs1").value);
		    document.getElementById("answer").innerHTML = "<h4>is valid email: "+ answer + "</h4>";
		},

		isNonEmpty () {
			answer = document.getElementById("inputs1").value ? true:false;
			document.getElementById("answer").innerHTML = "<h4>is not empty: "+ answer + "</h4>";
		},

		isMNL () {
			answer = (typeof document.getElementById("inputs2").value != "string")? false:true;
			if (n && m){
				answer = ((document.getElementById("inputs2").value.length)>=(document.getElementById("m").value.length) && (document.getElementById("inputs2").value.length)<=(document.getElementById("n").value.length)) ? true:false;
			}
			document.getElementById("answer").innerHTML = "<h4>is string length not less than m and not more than n: "+ answer + "</h4>";
		},

		isReg () {
			answer = (re.test(document.getElementById("inputs1").value))? true:false;
			document.getElementById("answer").innerHTML = "<h4>is reg expression: "+ answer + "</h4>";
		},

		isValid(){
			document.getElementById("answer").innerHTML += "<h4>last answer:"+answer + "</h4>";
		}

	}

})();