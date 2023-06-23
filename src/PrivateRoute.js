import {Route, Redirect} from 'react-router-dom'
import {useAuthValue} from './AuthContext'
//import PrivateRoute from './PrivateRoute'

export default function PrivateRoute({component:Component, ...rest}) {
  const {currentUser} = useAuthValue()

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser?.emailVerified ? <Component {...props} /> : <Redirect to='/login' />
    }}>
    </Route>
  )
}