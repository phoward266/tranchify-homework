import './App.css'
import { LoginView } from './views/LoginView'
import { DashboardView } from './views/DashboardView'
import { auth } from './utils/auth'

function App() {
  if (auth.isAuthenticated()) {
    return <DashboardView />
  }
  return <LoginView />
}

export default App