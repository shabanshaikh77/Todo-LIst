
import React, { useState } from 'react';

export const Addtodo = ({addTodo}) => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
   const submit = (e)=>
   {
    e.preventDefault();
    if(!title || !desc)
    {
        alert("Title or description can not be blank");
    }
    else{
    addTodo(title,desc);
    settitle("");
    setdesc("");
    }
   }
  
  return (
    
        <div className="container my-3 style">
            <h3>Add A Todo</h3>
        <form onSubmit={submit}>
  <div class="mb-3">
    <label for="title"  class="form-label">Todo List</label>
    <input type="text" value={title} onChange={(e)=>settitle(e.target.value)}  class="form-control" id="title" aria-describedby="emailHelp"/>
   
  </div>
  <div class="mb-3">
    <label for="Desc" class="form-label">Todo Description</label>
    <input type="text" value={desc}  onChange={(e)=>setdesc(e.target.value)}  class="form-control" id="desc"/>
  </div>
  
  <button type="submit" class="btn btm-sm btn-success">Add ToDo</button>
</form>
    </div>
    
  )
}

