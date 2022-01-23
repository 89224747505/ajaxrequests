const getImagesFromServer = (pageNumber) => {

const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`);
return promise.then((response)=>{
	return response.data;})
};

const getTasksFromServer = (widgetID) => {

const promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetID=${widgetID}&page=1&count=30`);
return promise.then((response)=>{
	return response.data;})
};

const createTasksToServer = (widgetID, title) => {

const promise = axios.post(`https://repetitora.net/api/JS/Tasks`, {
	widgetID: widgetID,
	title: title
});
return promise.then((response)=>{
	return response.data;})
};

const deleteTaskFromServer = (widgetID, id) => {

const promise = axios.delete(`https://repetitora.net/api/JS/Tasks?widgetID=${widgetID}&taskId=${id}`);
return promise.then((response)=>{
	return response.data;})
};