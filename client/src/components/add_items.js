import React from 'react';
import { useForm } from 'react-hook-form';
import api from '../utils/api';
import './items.css';

function AddItems() {
   
  const {register, handleSubmit} = useForm();

      const onSubmit =  (data) => {
        let res = api.post('/', data);
        console.log(res);
      }

        return (
          <>
           <h3>Add Item</h3>
        <div className="itemcard">
         <form onSubmit={handleSubmit(onSubmit)} className="form-group ml-5">
         <div class="form-group row">
           
               <label for="name" className="col-sm-2 col-form-label">Name: </label>
               <div className="col-sm-10">
               <input type="text" name="name" ref={register} />
               </div>

               <label for="price" className="col-sm-2 col-form-label">Price: </label>
               <div className="col-sm-10">
               <input type="text" name="price" ref={register} />
               </div>

               <label for="imageurl" className="col-sm-2 col-form-label">ImageURL: </label>
               <div className="col-sm-10">
               <input type="text" name="image" ref={register} />
               </div>

               <button type="submit" className=" btn btn-primary mt-2">Add Item</button>
           </div>
            </form>
    
         </div>
         </>
        )
    
}

export default AddItems;