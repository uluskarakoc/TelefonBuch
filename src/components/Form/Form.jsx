import { useEffect, useState } from "react";
import styles from "./form.module.scss"

const initialFormValues={fullname:"",phone_number:""};
function Form({addContact,contacts}) {

const [form, setForm] = useState(initialFormValues);

// useEffect(()=>{setForm(initialFormValues)},[])

const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit=(e)=>{
    e.preventDefault();
    if(form.fullname==="" || form.placeholder===""){
      return false
    }
    addContact([...contacts,form])
    setForm(initialFormValues)
  }
  return (


    <form  onSubmit={onSubmit} className={styles.form}>
      <div>
        <input name="fullname" placeholder="Full Name" value={form.fullname}  onChange={onChangeInput}/>
      </div>
      <div>
        <input name="phone_number" placeholder="Phone Number" value={form.phone_number}  onChange={onChangeInput}/>
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>


  );
}

export default Form;
