import { useState } from "react"
import '../styles/blog.css';

const blog = () => {





    


return (
  <div>
    <h1>Blog Page!</h1>
    <div >
      <form onSubmit={blog}>
        
        <textarea 
        placeholder="Enter longer text..."
        rows="4"
        />
        <button>save</button>
      </form>
    </div>
  </div>
)

}
export default blog