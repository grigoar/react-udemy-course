import classes from './ProfileForm.module.css';
import { useRef, useContext } from 'react';
import constantsEnv from '../../env';
import AuthContext from '../../store/auth-context';
import { useHistory } from 'react-router-dom';

const GOOGLE_API = constantsEnv.GOOGLE_API;

const ProfileForm = () => {
  const history = useHistory();
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    // add validation
    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${GOOGLE_API}`,
      {
        method: 'POST',
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecuredToken: false,
        }),
        headers: {
          'Content-Type': 'application/json',
          // "Authorization": "Bearer abc"
        },
      }
    ).then((res) => {
      // assumption: Always succeeds! no error handling
      history.replace('/');
    });
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          ref={newPasswordInputRef}
          type="password"
          id="new-password"
          minLength="7"
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
