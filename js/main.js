const input = document.getElementsByTagName("input")[0];
const btn = document.getElementsByTagName("button")[0];
const tasks = document.getElementsByClassName("tasks")[0];
btn.addEventListener("click", () => {
	if (input.value !== "") {
		let task = document.createElement("div");
		let tasktext = document.createTextNode(input.value);
		let removeBtn = document.createElement("i");
		removeBtn.setAttribute("class", "fas fa-x");
		input.value = "";
		task.setAttribute("class", "task");
		task.appendChild(tasktext);
		task.appendChild(removeBtn);
		tasks.appendChild(task);
		removeBtn.addEventListener("click", () => {
			task.remove();
		});
	} else {
		let error = document.querySelector(".error");
		error.style.display = "inline-block";
		setTimeout(() => {
			error.style.display = "none";
		}, 1700);
	}
});
