
export const AddTask = () => {
	return (
		<div className="Task">
			<form action="">
				<label htmlFor="task"> Task Name:</label>
				<input type="text"  name="task" id="task" placeholder="Enter Your task" autoComplete="off"/>
				<button type="submit" style={{backgroundColor:"tomato"}}> Add task</button>
			</form>
			
		</div>
	);
}


