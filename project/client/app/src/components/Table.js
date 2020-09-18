import React, { useState, useEffect } from 'react';

//dotenv.require()

export const Table = ()=> {
    const [patients, setPatients] = useState("");
    useEffect(() => {
	fetch(process.env.REACT_APP_DATA_HOST + '/get_raw').then(response =>
			response.json().then(data => {
			    setPatients(data.Patient);
			})
		       );
    }, []);
    
    const DataTable = () => (<div className="col">
			     <h1>Patients</h1>
			     <table>
			     <thead><tr><th>Id</th><th>Name</th></tr></thead>
			     <tbody>
			     {
				 Object.keys(patients).map((index) => ( 
					 <tr><td key={index}>{index}</td><td>{patients[index]}</td></tr>
				 ))
			     }
			     </tbody>
			     </table>
			     </div>);
    
    return( <DataTable/>  )
}
