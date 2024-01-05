import './mark1.css'
import '../font-awesome-4.7.0/css/font-awesome.min.css'
import Content from './content'

let cart2=[];
 function Mark2() {

  const Cup=(props)=>{
      cart2=[...cart2,props];
      console.log(cart2);
  }
  return (
    <>
        <div id="m1">
            <h2 id='trend'>Digital</h2>
            <div id="it">
                <Content Cup={Cup} img="src/images/s1.jpg" span="Fastrack" h="Fastrack Time" price="$500"/>
                <Content Cup={Cup} img="src/images/s2.jpg" span="Fossil" h="Fossil Sport" price="$1000"/>
                <Content Cup={Cup}  img="src/images/s3.jpg" span="Noise" h="Noise Black" price="$100"/>
                <Content Cup={Cup}  img="src/images/s4.jpg" span="Bolt" h="Bolt Speed" price="$200"/>
            </div>
        </div>
    </>
  )
}

export default Mark2