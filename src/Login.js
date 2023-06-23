import {useState} from 'react'
import { Link } from 'react-router-dom'
import './forms.css'
import {signInWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {auth, googleProvider} from './firebase'
import {useHistory} from 'react-router-dom'
import {useAuthValue} from './AuthContext'
import 'firebase/auth'
 
 
const googleSignin = () => {
//const provider = new firebase.auth.GoogleAuthProvider();


   auth
   
   .signInWithPopup(googleProvider)
   .then((result)=> {
      const token = result.credential.accessToken;
      const user = result.user;
		
      console.log(token)
      console.log(user)
   })
   .catch((error)=> {
      const errorCode = error.code;
      const errorMessage = error.message;
		
      console.log(errorCode)
      console.log(errorMessage)
   });
};

const googleSignout =() => {
   auth
   .signOut()
	
   .then(()=> {
      console.log('Signout Succesful')
   }) 
    .catch((error) => {
      console.log('signout Failed')
    });
    
};
 
function Login(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 
  const [error, setError] = useState('')
  const {setTimeActive} = useAuthValue()
  const history = useHistory()

  const login = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      if(!auth.currentUser.emailVerified) {
        sendEmailVerification(auth.currentUser)
        .then(() => {
          setTimeActive(true)
          history.push('/verify-email')
        })
      .catch(err => alert(err.message))
    }else{
      history.push('/')
    }
    })
    .catch(err => setError(err.message))
  }


  return(
    <div className='center'>
      <div className='auth'>
        <h1>Log in</h1>
        {error && <div className='auth__error'>{error}</div>}
        <form onSubmit= {login} name='login_form'>
          <input 
            type='email' 
            value={email}
            required
            placeholder="Enter your email"
            onChange={e => setEmail(e.target.value)}/>

          <input 
            type='password'
            value={password}
            required
            placeholder='Enter your password'
            onChange={e => setPassword(e.target.value)}/>

          <button type='submit'>Login</button>
        </form>
        <p> 
          Don't have an account? 
          <Link to='/register'>Create one here</Link>
         
        </p>
      </div>
    </div>
  )
}

export default Login;
