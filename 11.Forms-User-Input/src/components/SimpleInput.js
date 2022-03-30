import useInput from '../hooks/user-input';

// --------------- V3-----------------------
const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangedHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== '');
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangedHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'));

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }
    if (!enteredEmailIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);
    //in this way we manipulate DOM directly, so it is not ideal.
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';
  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onBlur={nameBlurHandler}
          onChange={nameChangedHandler}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty!</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">Your Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onBlur={emailBlurHandler}
          onChange={emailChangedHandler}
        />
        {emailInputHasError && (
          <p className="error-text">Email must be valid(include "@")!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

// --------------- V2-----------------------
// const SimpleInput = (props) => {
//   const [enteredName, setEnteredName] = useState('');
//   const [enteredNameTouched, setEnteredNameTouched] = useState(false);
//   const [enteredEmail, setEnteredEmail] = useState('');
//   const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
//   // const [formIsValid, setFormIsValid] = useState(false);

//   const enteredNameIsValid = enteredName.trim() !== '';
//   const enteredEmailIsValid = enteredEmail.includes('@');
//   // const enteredAgeIsValid = ;
//   const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
//   const emailInputIsValid = !enteredEmailIsValid && enteredEmailTouched;

//   let formIsValid = false;
//   if (enteredNameIsValid && enteredEmailIsValid) {
//     formIsValid = true;
//   }

//   const emailInputChangeHandler = (event) => {
//     setEnteredEmail(event.target.value);
//   };
//   const emailInputBlurHandler = (event) => {
//     setEnteredEmailTouched(true);
//   };

//   const nameInputChangeHandler = (event) => {
//     setEnteredName(event.target.value);
//   };

//   const nameInputBlurHandler = (event) => {
//     setEnteredNameTouched(true);
//   };

//   const formSubmissionHandler = (event) => {
//     event.preventDefault();

//     if (!enteredNameIsValid) {
//       return;
//     }
//     if (!enteredEmailIsValid) {
//       return;
//     }

//     console.log(enteredName);
//     console.log(enteredEmail);
//     //in this way we manipulate DOM directly, so it is not ideal.
//     setEnteredName('');
//     setEnteredEmail('');
//     setEnteredNameTouched(false);
//     setEnteredEmailTouched(false);
//   };

//   const nameInputClasses = nameInputIsInvalid
//     ? 'form-control invalid'
//     : 'form-control';
//   const emailInputClasses = emailInputIsValid
//     ? 'form-control invalid'
//     : 'form-control';

//   return (
//     <form onSubmit={formSubmissionHandler}>
//       <div className={nameInputClasses}>
//         <label htmlFor="name">Your Name</label>
//         <input
//           type="text"
//           id="name"
//           value={enteredName}
//           onBlur={nameInputBlurHandler}
//           onChange={nameInputChangeHandler}
//         />
//         {nameInputIsInvalid && (
//           <p className="error-text">Name must not be empty!</p>
//         )}
//       </div>
//       <div className={emailInputClasses}>
//         <label htmlFor="name">Your Email</label>
//         <input
//           type="email"
//           id="email"
//           value={enteredEmail}
//           onBlur={emailInputBlurHandler}
//           onChange={emailInputChangeHandler}
//         />
//         {emailInputIsValid && (
//           <p className="error-text">Email must be valid(include "@")!</p>
//         )}
//       </div>
//       <div className="form-actions">
//         <button disabled={!formIsValid}>Submit</button>
//       </div>
//     </form>
//   );
// };

// export default SimpleInput;

// --------------- V1-----------------------
// import { useRef, useState, useEffect } from 'react';

// const SimpleInput = (props) => {
//   const [enteredName, setEnteredName] = useState('');
//   const nameInputRef = useRef();
//   const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
//   const [enteredNameTouched, setEnteredNameTouched] = useState(false);

//   const nameInputChangeHandler = (event) => {
//     setEnteredName(event.target.value);

//     if (event.target.value.trim() !== '') {
//       setEnteredNameIsValid(true);
//     }
//   };

//   useEffect(() => {
//     if (enteredNameIsValid) {
//       console.log('Name Input is valid!');
//     }
//   }, enteredNameIsValid);

//   const nameInputBlurHandler = (event) => {
//     setEnteredNameTouched(true);

//     if (enteredName.trim() === '') {
//       setEnteredNameIsValid(false);
//     }
//   };

//   const formSubmissionHandler = (event) => {
//     event.preventDefault();

//     setEnteredNameTouched(true);

//     if (enteredName.trim() === '') {
//       setEnteredNameIsValid(false);
//       return;
//     }

//     setEnteredNameIsValid(true);

//     console.log(enteredName);
//     const enteredValue = nameInputRef.current.value;
//     console.log(enteredValue);
//     //in this way we manipulate DOM directly, so it is not ideal.
//     nameInputRef.current.value = '';
//     // setEnteredName('');
//   };

//   const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

//   const nameInputClasses = nameInputIsInvalid
//     ? 'form-control invalid'
//     : 'form-control';

//   return (
//     <form onSubmit={formSubmissionHandler}>
//       <div className={nameInputClasses}>
//         <label htmlFor="name">Your Name</label>
//         <input
//           ref={nameInputRef}
//           type="text"
//           id="name"
//           value={enteredName}
//           onBlur={nameInputBlurHandler}
//           onChange={nameInputChangeHandler}
//         />
//         {nameInputIsInvalid && (
//           <p className="error-text">Name must not be empty!</p>
//         )}
//       </div>
//       <div className="form-actions">
//         <button>Submit</button>
//       </div>
//     </form>
//   );
// };

// export default SimpleInput;
