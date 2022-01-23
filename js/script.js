
const result = document.querySelector(".result");
const clickMe = document.querySelector(".btnRequest");
const pageNumber = document.querySelector(".pageNumber");

const doRequest = () => {
	result.innerHTML = '';
	$.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber.value}&count=1`,{success:(data)=>{
		console.log(data);
		data.forEach(element => {
			const img = document.createElement('img');
			img.src = element.original;
			result.appendChild(img);
		})
	}});
}

clickMe.addEventListener("click", doRequest);

