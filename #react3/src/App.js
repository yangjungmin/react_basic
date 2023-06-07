import './App.css';
import Body from "./comporent/Body";
import Header from "./comporent/Header";
import Footer from "./comporent/Footer";
import Children  from "./comporent/Children";

function App() {
  const name = "jm";
  const footerProps = {
    name: "jm",
    location: "부산",
  };
  function handleClick() {
    console.log("함수형클릭")
  }
  const arrowClick = () => {
    console.log("화살표함수실행")
  }
  return (
    <div>
      <Body name={name} location="부산" />
      <Header name={name} />
      <Footer {...footerProps} />
      <Children>
        <div>childern 컴퍼넌트</div>
      </Children>
      <button onClick={handleClick}>함수형 클릭</button>
      <button onClick={arrowClick}>화살표함수 클릭</button>
    </div>
  );
}

export default App;
