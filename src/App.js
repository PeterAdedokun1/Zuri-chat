import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      {/* ZURI CHAT SECTION */}
      <div className='zuri'>
        <div className='zuri-img '>
        <img src="logo.svg" alt=""  />
        <h1 className='p-3'>ZURI CHAT</h1>
        </div>
        <p>THE FUTURE OF REMOTE WORK IN THE METAVERSE IS BEING BUILT</p>
        <h1 className='work1'>Network. Collaborate. <br />       Educate. Learn Remotely.</h1>
        <h1 className='work'>Work remote and still feel the <br /> togetherness.</h1>
        <p className='we'>We are building the platform that will power remote work in <br /> the Web3 future and make it feel as good as sitting across <br />the desk from your friends. Remote work that still allows for <br /> those moments of serependity.</p>
        <div className='input'>
          <input type="text" placeholder='Enter your e-mail' /> 
            <button>Join the waitlist</button>
        </div>
      </div>

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
      <br />
   {/*laptop image  */}

      <div className='laptop'>
        <img src="laptop.webp" alt="" />
        <img src="phone.webp" alt="" />
      </div>


      {/* SECTION TWO */}

     
      <div className="zuri-platform">
        <div className='img '>
          <h1>Zuri Chat is a platform on which an infinite number of powerful <br /> collaboration apps can be built.</h1>
          </div>
          <br />
          <div className="zuri-img row">
            <div className="img-1 col-md-4">
                <img src="./newWay.webp" alt="" />
            <p>You can manage our DAO in Zuri - from voting to <br /> treasury to rewarding tasks.</p>
            </div>
            <div className="img-2 col-md-4">
              <img src="./newWay.webp" alt="" />
              <p>You can use AR glasses to have meetings where <br />you can see everyone else.</p>
            </div>
            <div className="img-3 col-md-4">
              <img src="./newWay.webp" alt="" />
              <p>You can live in animated, virtual workspaces - chat <br /> by the cooler, listen to music and play games </p>
            </div>      
          </div>
            
      </div>
      

      {/* SECTION THREE */}
      <div className='web-native container'>
        <div className='row'>
          <h1>Web3 native, built by NFT holders - our Zuri Kings & Queens</h1>
          <div className="Web3">
            <img src="./nftOne.webp" alt="" />
            <img src="./nftTwo.webp" alt="" />
            <img src="./nftThree.webp" alt="" />
          </div>

          <p>Zuri Chat is currently being built by the ZuriDAO. We are about 500 developers, designers and other talented people, working to make the Zuri Chat platform a reality. We operate as a Distributed, Autonomous Organisation.</p>
          <br />
          <br />
          <br />
          <br />

          <h1 className='only'>Only People with valid NFTs can join the DAO and become <br /> contributors to the project.</h1>
      <br />
          <br />  
          <div>
            <button>Purchase your NFT on OpenSea</button>
            </div>
          <p>Quick Guide to the NFTs</p>
          <p className='red'>(read this before making a purchase)!</p>
          <br />
          <br />
          <br />
          <br />

          
        </div>
       
      </div>
{/* ANOTHER SECTIONS */}
      
      <div className="container">
        <div className="row">
          <div className="col-md-6 p-2 flex">
            <div className='small'>
            <img src="blankRectangle.webp" alt="" className='pe-5'/>
              <p>Hats mean the owner is or has been a team lead.</p>
              </div>
          </div>
          <div className="col-md-6 p-2 ">
            <div className="small">
            <img src="blankRectangle.webp" alt="" className='pe-5' />
              <p>Necklaces mean that this NFT can vote in the <br /> DAO. Number of notches determine voting <br /> power.</p>
              </div>
          </div>
        </div>
      </div>
      
     
      
<br />
<br />
<br />
<br />
<br />
<br />
<br />
      <br />
      {/* SECTION THREE */}
      <section id='source'>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className='text-center' >View the Source Code</h1>
              <p className='text-center'>Zuri Chat is not an open source project, but it’s an open code project. Our  source code cannot be forked, but it can be viewed on our repositories openly. The code is owned with full copyright by all DAO members. This is  a different licensing model from open source projects. It means we are   fully open, but to interact with our code, you need to be a DAO member.</p>
              <br />
              <br />
              <div className='btn'>
              <button className='text-center'>View On Githhub</button>

              </div>
            </div>
            <div className="col-md-6">
              <h1 className='text-center'>View the Zuri Token</h1>
              <p className='text-center'> The Zuri Token will be used a utility token in the final Zuri Chat app. When workspaces   are created, the Zuri Token will be used for certain functionality. More will be made known when the whitepaper is released.</p>
              <br />
              <div className='btn'>
              <button>View on BCS SCAN</button> <br />
              <br />

                <button>View on Pancake Swap</button>
              </div>
              <br />
              <br />
                <br />
                <br />

            </div>
          </div>
        </div>
      </section>

      {/* SECTION FOUR */}
     
      {/* ICON SECTION */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='icons'>
        <i class='bx bxl-facebook'></i>
        <i class='bx bxl-twitter'></i>
        <i class='bx bxl-instagram' ></i>
        <i class='bx bxl-linkedin' ></i>  
        <br />

        <p>2022 Zuri Chat. All rights reserved.</p>
          </div>

<br />
<br />
<br />
<br />
<br />

    </>
  );
}

export default App;
