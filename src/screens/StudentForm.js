import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyInput from '../components/MyInput';
import SMModal from '../components/SMModal';
import { Box } from '@mui/system';
import Button from '../components/Button';
import { postFBdata } from './firebaseMethods';
import { Typography } from '@mui/material';

const StudentForm = () => {
    const [open, setOpen] = useState(false);
    const [model, setModel] = useState({});
    const saveReview = (model) => {
        postFBdata('Review', model).then((res) => { console.log("posted") }).catch((err) => { console.log("error") })
    }
    return (
        <>
            <div className="container py-3">
                <div><h1 className="fw-bold p-2">Student Form</h1></div>
                <div className="row">
                    <div className="col-md-6 py-3">
                        <input type="name" placeholder="Student Name" className="rounded p-2 w-75 my-1" />
                        <input type="name" placeholder="Father Name" className="rounded p-2 w-75 my-1" />
                        <input type="number" placeholder="Contact" className="rounded p-2 w-75 my-1" />
                        <input type="number" placeholder="CNIC" className="rounded p-2 w-75 my-1" />
                        <input type="email" placeholder="Email" className="rounded p-2 w-75 my-1" />
                        <select className="rounded p-2 w-75 my-1">
                            <option>Last Qualification</option>
                            <option>Matric</option>
                            <option>Inter</option>
                            <option>Bachelors</option>
                            <option>Masters</option>
                        </select>
                        <select className="rounded p-2 w-75 my-1">
                            <option>Course</option>
                            <option>Science</option>
                            <option>Maths</option>
                            <option>Islamiat</option>
                            <option>English</option>
                        </select>
                        <select className="rounded p-2 w-75 my-1">
                            <option>Section</option>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                        </select>
                        <select className="rounded p-2 w-75 my-1">
                            <option>Section</option>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                        </select>
                        <select className="rounded p-2 w-75 my-1">
                            <option>City</option>
                            <option>Karachi</option>
                            <option>Islamabad</option>
                            <option>Lahore</option>
                        </select>
                        <select className="rounded p-2 w-75 my-1">
                            <option>Country</option>
                            <option>Pakisatan</option>
                            <option>India</option>
                            <option>Bangladesh</option>
                        </select>
                        <input type="name" placeholder="Address" className="rounded p-2 w-75 my-1" />
                        <select className="rounded p-2 w-75 my-1">
                            <option>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                        <input className="rounded p-2 w-75 my-1"
                            name='name' placeholder='Sir Adamjee Institute' disabled />
                        <div className='rounded border-1 p-2 w-75 my-1'>Date of Birth :  <input type='date' /></div>
                        <input type="password" placeholder="Password" className="rounded p-2 w-75 my-1" />
                        <button className="my-2 py-1 text-center text-dark bg-light rounded border-dark w-25 mx-2"
                            onClick={() => { setOpen(true) }}>Submit</button>
                        <SMModal
                            open={open}
                            close={(e) => setOpen(e)}
                            innerContent={<Box>
                               <Typography>Data Submitted</Typography>
                               </Box>} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default StudentForm;