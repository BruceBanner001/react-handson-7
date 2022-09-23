import React, { useState } from "react";

let studentDetails = {
    name: '',
    age: '',
    course: '',
    batch: ''
}

const Students = () => {
    const [data, setData] = useState([]);
    const [edit, setEdit] = useState(false);
    const [hide, setHide] = useState(false);
    const [database, setDatabase] = useState(studentDetails);

    const editHandler = (e) => {
        const value = e.target.value
        setDatabase(database => ({ ...database, [e.target.name]: value }))
    }
    const addData = () => {
        if (edit) {
            const updateData = data.map((row) => row.id === database.id ? database : row);
            setData(updateData);
            setEdit(false);
            setDatabase(studentDetails)
            setHide(!hide)
        }
        else {
            let listItems = data;
            const item = {
                id: data.length,
                ...database
            }
            listItems = [...data, item];
            setData(listItems);
            clearData();
            setHide(!hide)
        }
    }
    const clearData = () => {
        setDatabase(studentDetails);
    }
    const editRow = (row) => {
        setDatabase(row);
        setEdit(true);
        setHide(!hide)
    }
    const deleteRow = (id) => {
        const filtered = data.filter(item => item.id !== id);
        console.log(filtered);
        setData(filtered);
    }
    return (
        <>
            {hide ? null : <>
                <div className='con'><br></br>
                    <h1 className="studentDetailsNameTag">Student Details</h1>
                    <button className='addNewStudent' onClick={() => { setHide(!hide) }}>Add New Student</button>
                </div><br></br>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Age</th>
                                <th scope="col">Course</th>
                                <th scope="col">Batch</th>
                                <th scope="col">Change</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((row, i) =>
                                <tr>
                                    <th scope="row">{row.name}</th>
                                    <td>{row.age}</td>
                                    <td>{row.course}</td>
                                    <td>{row.batch}</td>
                                    <td><button onClick={() => { editRow(row) }} className="buttons">Edit</button></td>
                                    <td><button onClick={() => { deleteRow(row.id) }} className="buttons">Delete</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div></>
            }
            {hide ?
                <div>
                    <div className='updateStudentDetails'>
                        <input name='name' value={database.name} label='Name' placeholder='Name' onChange={editHandler} /> <br></br>
                        <input name='age' value={database.age} label='Age' placeholder='Age' onChange={editHandler} /> <br></br>
                        <input name='course' value={database.course} label='course' placeholder='Course' onChange={editHandler} /> <br></br>
                        <input name='batch' value={database.batch} label='Batch' placeholder='Month' onChange={editHandler} />
                    </div><br></br><br></br>
                    <div>
                        <button onClick={addData} className="buttonsOnEditPage">{edit ? 'Update' : 'Submit'}</button>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        <button onClick={clearData} className="buttonsOnEditPage">Clear</button>
                    </div>
                </div> : null}
        </>

    )
}
export default Students;