import './mark1.css'
import '../font-awesome-4.7.0/css/font-awesome.min.css'
import Content from './content'

let cart1=[];
 function Mark1() {

  const Cup=(props)=>{
      cart1=[...cart1,props];
      console.log(cart1);
  }

  return (
    <>
    <div id="m1">
    <h2 id='trend'>Trending</h2>
    <div id="it">
      <Content Cup={Cup} img="src/images/w1.jpeg" span="Hilfiger" h="Hilfiger Black" price="$110"/>
      <Content Cup={Cup} img="src/images/w2.jpeg" span="Limestone" h="Limestone Time" price="$310"/>
      <Content Cup={Cup} img="src/images/w3.png" span="Richard Mille" h="Richard Engine" price="$11000000"/>
      <Content Cup={Cup} img="src/images/w4.jpg" span="Bugatti" h="Bugatti Chiron" price="$90000000"/>
        </div>
        </div>
    </>
  )
}

export default Mark1
