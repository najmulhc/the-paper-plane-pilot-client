 
import BookCard from "./components/BookCard/BookCard";
import { account } from "./lib/appwrite";

function App() {
  function loginwithGoogle() {
    account.createOAuth2Session("google");
  }
  return (
    <>
      <button onClick={loginwithGoogle}>Google login</button>
      <div>
        <BookCard/>
      </div>
    </>
  );
}

export default App;
