import React from 'react';

export const TaskCard=({task,handleDel})=>{
	return(
			<li key={task.id}>

				<span>{task.name}</span>- <span>{task.id}</span>
				<button className="del" onClick={()=>handleDel(task.id)}>delete </button> 
			</li>
	)
}
