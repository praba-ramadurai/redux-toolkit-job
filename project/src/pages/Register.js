import { useState } from "react";
import { toast } from 'react-toastify';

import { Logo,FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({...values,[name]:value})
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const onSubmit = (e) => {
    e.preventDefault();
const {name,email,password,isMember}=values;
if(!email || !password || (!isMember && !name)){
  console.log('Please Fill Out All Fields');
  toast.error('Please fill out all fields')
  return;
}
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>

        {!values.isMember && (
            <FormRow
              type="text"
              value={values.name}
              name="name"
              handleChange={handleChange}
            />
        )}
        
          <FormRow
            type="email"
            value={values.email}
            name="email"
            handleChange={handleChange}
          />
          
          <FormRow
            type="password"
            value={values.password}
            name="password"
            handleChange={handleChange}
          />
        <button type='submit' className='btn btn-block'>
          Submit
        </button>

        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" className="member-btn" onClick={toggleMember}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
