import React, {useState} from 'react'


const Form =()=>{

const [name, setName ]= useState('')
const [contact, setContact ]= useState('');
const [address, setAddress ]= useState('');
const [access, setAccess]=useState([]);

const handleSubmit=(e)=>{
e.preventDefault();
setAccess([...access, {name, contact, address}])
         setName('');
         setContact('');
         setAddress('');
}

    return(
         <div>
    
    <form >
   
    <label>Name</label> <br />
    <input type='text' value={name} onChange={(e)=>{
       setName( e.target.value)
    }} /><br />
    <label>Contact</label> <br />
    <input type='number' value={contact} onChange={(e)=>{
       setContact( e.target.value)
    }} /><br />
    <label>Address</label> <br />
    <input type='text' value={address} onChange={(e)=>{
        setAddress(e.target.value)
    }} /> <br/>
    <button onClick={handleSubmit}>Submit</button>
    </form>
    <p>Design by: Eric Okyere</p>

    {access.map((item, index)=>{
                return(<div className='secdiv' key={index}>
                    <h1>{item.name}</h1>
                    <h1>{item.contact}</h1>
                    <h1>{item.address}</h1>
                    </div>)
        })
    }
    </div>


    )
}
export default Form;