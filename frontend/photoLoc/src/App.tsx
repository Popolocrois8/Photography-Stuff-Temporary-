import BottomNav from "./components/BottomNav";
import Header from "./components/Header";
import { SocialButtonGroupBrandDemo } from "./components/SocialButtonGroupBrand";
import { DefaultInput } from "./components/DefaultInput";

function App() {
  return (
    <>
      <Header />
      <h1>PhotoLoc</h1>
      <SocialButtonGroupBrandDemo /> {/* combine this with defaul input as one whole component of Login/Signup form for easier styling  */}
      <DefaultInput />
      <BottomNav />
    </>
  );
}


export default App;