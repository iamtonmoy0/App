import { useState } from "react";

export const AddTask = () => {

	const [TaskValue,setTaskValue]=useState('');
	const handleChange=(e)=>{
		setTaskValue(e.target.value)
	}
	const handleRes=()=>{
		setTaskValue("");  //resetting the task value
	}
	return (
		<div className="Task">
			<form action="">
				<label htmlFor="task"> Task Name:</label>
				<input type="text"  name="task" id="task" placeholder="Enter Your task" autoComplete="off" onChange={handleChange} value={TaskValue}/>
				<button type="submit" style={{backgroundColor:"green"}}> Add task</button>
				<button type="submit" style={{backgroundColor:"tomato"}} onClick={handleRes}> Reset</button>
			</form>
			{TaskValue.length}
			
		</div>
	);
}


