//your JS code here. If required.
const container=document.querySelector(".container")
const fragment = document.createDocumentFragment();
for(let i=0;i<800;i++){
	const div=document.createElement("div")
	div.classList.add("box");
	div.addEventListener("mouseenter",(e)=>{
		const red=Math.floor(Math.random()*256);
		const green=Math.floor(Math.random()*256);
		const blue=Math.floor(Math.random()*256);
		e.target.style.backgroundcolor=`rgb(${red},${green},${blue})`;
		e.target.style.boxshadow= "1px 1px 1px black";
		});
	div.addEventListener("mouseout",(e)=>{
		setTimeOut(()=>{
			e.target.style,backgroundcolor= "gray";
			e.target.style.boxshadow= "none";
		},500)
		fargment.appendChild(div)
	})
	container.appendChild(fargment)
}