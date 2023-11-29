 
import { account } from "./lib/appwrite";

function App() {
  function loginwithGoogle() {
    account.createOAuth2Session("google");
  }
  return (
    <>
      <button onClick={loginwithGoogle}>Google login</button>
    </>
  );
}

export default App;
