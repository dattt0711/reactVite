import useRouteElement from './useRouteElement'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const routeElements = useRouteElement()
  return <>
    {routeElements}
    <ToastContainer />
  </>
}
export default App
