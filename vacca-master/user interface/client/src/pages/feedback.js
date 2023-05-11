import React, {useState, useEffect} from "react";
import Navbar from '../components/Navbar'
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function FeedBack() {

    const jsonString = localStorage.getItem('myData');
    const myData = JSON.parse(jsonString);

    

    const [feedBack, setFeedBack] = useState([]);
    const [userInfo, setuserInfo] = useState([]);
    const [myfeedback, setmyfeedback] = useState('');

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    useEffect(() => {
        const fetchFeedBacks = async () => {
      const feedBacks = await axios.get("http://localhost:5000/api/fetchUserFeedBack");
      setFeedBack(feedBacks.data);
      
    };
        const fetchuser = async () => {
      const userInfo = await axios.get("http://localhost:5000/api/fetchAllUser");
      setuserInfo(userInfo.data);
      
    };
    fetchFeedBacks();
    fetchuser();
    },[])


  const combinedArr = userInfo.map(obj1 => {
  const matchedObj = feedBack.filter(obj2 => obj2.mail === obj1.mail)[0];
  return {...obj1, ...matchedObj};
});

   const filteredArry = combinedArr.filter(obj1 => obj1.hasOwnProperty('feedBack'));


   const handleSubmit = (e) => {
    e.preventDefault();

    const datda = {
        mail: myData.mail,
        feedBack: myfeedback
    }
    const post = axios.post('http://localhost:5000/api/adduserFeedBack',datda );

    console.log(post.data);
    
   };

  return (
    <>
    <Navbar/>
    <div style={{margin:'100px'}}>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <h1>FeedBacks</h1>
             <Button variant="primary" onClick={handleShow}>
        Add your FeedBack
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add FeedBack</Modal.Title>
        </Modal.Header>
        <div style={{padding:'20px', display:'flex', flexDirection:'column'}}>
            <label>Your FeedBack</label>
        <input type="text" onChange={(e)=>{setmyfeedback(e.target.value)}}></input>
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

        </div>

    {
        filteredArry && filteredArry.map((data) => {
            return(
                <div style={{marginTop:'20px', boxShadow:'2px 2px 5px rgba(0, 0, 0, 0.3)', padding:'10px'}}>
                    <div> <img src={data.profilePicture} alt="Profile" height={'100px'} width={'100px'}></img></div>
                    <div>
                        <h4>{data.name}</h4>
                        <h6>{data.feedBack}</h6>
                    </div>

                </div>
            )
        })
    }
    </div>
      
    </>
  );
}

export default FeedBack;
