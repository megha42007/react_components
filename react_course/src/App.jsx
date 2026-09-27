import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Button from "./components/Button";
import Form from "./components/Form";
function App(){
  return (
    <>
      <Header/>
      <h2>Welcome to my portfolio</h2>
      <Card
      name="Megha varshini"
      role="CSE Student"
      description="Learning Web development."
      />
      <Button text="Click me"/>
      <Form/>
      <Footer/>
    </>
  );
}
export default App;