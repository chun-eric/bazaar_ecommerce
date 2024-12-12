import { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  // toggle state
  const toggleState = () => {
    // if current state is login, change it to sign up and vice versa
    setCurrentState(currentState === "Login" ? "Sign Up" : "Login");
  };

  // function to handle form submission
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      action=''
      className='flex flex-col items-center w-[90%] sm:max-w-lg m-auto mt-14 gap-4 text-gray-800'
    >
      {/* TITLE */}
      <div className='inline-flex items-center gap-2 mt-10 mb-2'>
        <p className='text-3xl font-prata'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800  ' />
      </div>
      {/* INPUT FIELDS */}
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          type='text'
          className='w-full px-3 py-2 border border-gray-800'
          placeholder='Name'
          required
        />
      )}
      <input
        type='email'
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Email'
        required
      />
      <input
        type='password'
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Password'
        required
      />
      <div className='flex justify-between w-full text-sm mt-[-8px]'>
        <p className='text-xs cursor-pointer sm:text-sm'>
          Forgot your password?
        </p>
        <button
          type='button'
          onClick={() => toggleState()}
          className='text-xs cursor-pointer sm:text-sm hover:underline'
        >
          {currentState === "Login" ? "Sign Up" : "Login Here"}
        </button>
      </div>
      <button
        className={`px-8 py-3 mt-4 font-light tracking-normal text-white uppercase bg-black  ${
          currentState === "Sign Up" ? "w-full sm:w-auto sm:mt-4" : "mt-4"
        }`}
      >
        {currentState}
      </button>
    </form>
  );
};

export default Login;
