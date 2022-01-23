const result = document.querySelector(".result");
const clickImg = document.querySelector(".btnRequestImg");
const clickGetTasks = document.querySelector(".btnRequestTasks");
const pageNumber = document.querySelector(".pageNumber");
const inputTask = document.querySelector(".taskTitle");
const clickCreateTasks = document.querySelector(".btnResponseTask");
const state = [];

const addNewImage=(data)=> {
		data.forEach(element => {
			const img = document.createElement('img');
			img.src = element.original;
			img.style = 'margin-left:20px';
			result.appendChild(img);
		})
	}

document.addEventListener("clickdelete", ()=>{
	console.log("ok")
	result.innerHTML = '';
	const promise = deleteTaskFromServer('123432', state[0].id);
	promise.then((data)=>{
		console.log("Удалил элемент");
	})

});

const addNewTask=(data)=> {
	if (data.length === 0) 
		{
			const div = document.createElement('div');
			div.innerHTML = 'НЕТ НОВЫХ ЗАДАЧ';
			div.className = 'div_err';
			result.appendChild(div);
			return;
		}
		state.length = 0;
		data.forEach(element => {
			console.log(element.id);
			state.push({id:element.id, title:element.title});
			const div = document.createElement('div');
			div.innerHTML ='<button class="btnKill">X</button>'+ element.title;
			debugger;
			div.children[0].id = element.id;
			let event = new Event("clickdelete");
			div.children[0].dispatchEvent(event);
			div.className = 'div_task';
			result.appendChild(div);
		})
	}



clickImg.addEventListener("click", ()=>{
	result.innerHTML = '';
	const promise = getImagesFromServer(pageNumber.value);
	promise.then((data)=>{
		addNewImage(data);
	})

});


clickGetTasks.addEventListener("click", ()=>{
	result.innerHTML = '';
	const promise = getTasksFromServer('123432');
	promise.then((data)=>{
		addNewTask(data);
	})

});

clickCreateTasks.addEventListener("click", ()=>
{
	result.innerHTML = '';
	const promiseSet = createTasksToServer('123432', inputTask.value);
	promiseSet.then(()=>
	{
		const promiseGet = getTasksFromServer('123432');
		promiseGet.then((data)=>{
		addNewTask(data);
	})
	})

});
