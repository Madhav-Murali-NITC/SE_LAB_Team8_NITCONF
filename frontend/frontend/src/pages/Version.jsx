
import React,{useEffect, useState } from 'react';
import  axios from 'axios';
import dummy from '../dummy.json';
import Navbar from './Navbar.jsx';
import Comments from './Comments.jsx';
import './Version.css';







const Version = () => {

   

    const [allPapers, setAllPapers] = useState([]);
    const [versionPaperId, setVersionPaperId] = useState([])

    
   

    const authorId = localStorage.getItem('authorId');
    
    useEffect( () => {

        //fetch author user id from local data (implement encryption later?)
        


        const fetchUserData = async() =>{
            try {
                 
                const response  = await axios.get(`http://localhost:8080/paper/author/${authorId}`, {
                    headers: {
                        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuYWVlbV9iMjEwNDc0Y3NAbml0Yy5hYy5pbiIsImlhdCI6MTcwNjU5NjMwOCwiZXhwIjoxNzA3NjM1NTM3fQ.SJF7Vapwc6sMO4ouPnRjaDjhf5STQtNlnnRsunxrumk`
                    }
                })
                console.log(response.data)
                setAllPapers(response.data)
            } catch(errror){
                //print("invalid user")
            }
        }

        fetchUserData();

    },[]);






    //set up an api call to show all papers in dropdown and set the versionpaperId 
    //as that (change from const to state in useEffect)

    //add the dropdown in the return section and check if comments component is correct.


    const [versionPapers, setVersionPapers] = useState([]);

    const [selectedPaperVersion, setSelectedPaperVersion] = useState([]);
    
    
    useEffect( () => {
    
        const fetchUserData = async() =>{
            
            try {
                const response  = await axios.get(`http://localhost:8080/version/all/${versionPaperId}`, {
                    headers: {
                        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuYWVlbV9iMjEwNDc0Y3NAbml0Yy5hYy5pbiIsImlhdCI6MTcwNjU5NjMwOCwiZXhwIjoxNzA3NjM1NTM3fQ.SJF7Vapwc6sMO4ouPnRjaDjhf5STQtNlnnRsunxrumk`
                    }
                    
                })
                setVersionPapers(response.data)
                console.log('the versions of the selected paper are: ' + response.data)
                
            } catch(error){
                
                console.log(error)
            }
        
        }
        fetchUserData();
    },[versionPaperId])
    
    
    const handleDropdownChange = (e) => {
        console.log(e.target.value)
        
        setSelectedPaperVersion(e.target.value);
        
    }
    
  

    const handleDropdownChangePapers = (e) => {
       console.log('selected version id is :' + e.target.value)
        setVersionPaperId(e.target.value);
        setSelectedPaperVersion('');
    
    } 




    return (
        <div className='container'>
            <Navbar />

            <h1>Select Paper</h1>
            <div className='dropdown--div'>  
                    <select id="dropdown" value={versionPaperId} onChange={handleDropdownChangePapers}>
                    <option value=''>Select a paper</option>  
                        {allPapers.map((option) =>(
                            <option key={option.id} value={option.id}>
                                {option.title}
                            </option>
                        ))}
                    </select>
                </div>




            <h1>Version History</h1>
            <div className='dropdown--div'>  
                    <select id="dropdown" value={selectedPaperVersion} onChange={handleDropdownChange}>
                    <option value=''>Select a paper</option>  
                        {versionPapers.map((option) =>  (
                            <option key={option.versionId} value={option.versionId}>
                                {option.title}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <Comments paperId ={versionPaperId} versionId={selectedPaperVersion} />

                </div>




            
        </div>
    );
};

export default Version;