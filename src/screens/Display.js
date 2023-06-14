import React, { useEffect, useState } from 'react'
import Button from '../components/Button';
import SMModal from '../components/SMModal';
import Table from '../components/Table';
import Get from './apiBaseMethod';
const Display = () => {

    let col = [
        {
            key: "username",
            displayName: "Name"
        },
        {
            key: "email",
            displayName: "Email"
        },
        {
            key: "phone",
            displayName: "Contact No"
        },
        {
            key: "website",
            displayName: "Website"
        },
        {
            // displayField:  ,
            key: "",
            displayName: "View"
        },
    ];
    const [user, setUser] = useState([])
    let getUser = () => {
        Get("users").then((res) => { setUser([...res.data]) }).catch((err) => { console.log(err) })
        console.log(user)
    };

    useEffect(() => { getUser() }, []);

    return (
        <div className='bg-dark'>
            <div className='container bg-white py-2'>

                <div className=' py-2'>
                    <div> <h1 className='py-2'>Component : Button</h1>
                        <p className='text-muted py-2'>Buttons allow users to take actions, and make choices, with a single tap.</p>
                        <p className='text-muted py-2'>Buttons communicate actions that users can take. They are typically placed throughout your UI</p> </div>
                    <div>
                        <h2 className='py-2'>Basic Button</h2>
                        <p>The Button comes with three className: outlined(default), contained, and text.</p>
                        <Button label='OUTLINED' className='outlined mx-2' />
                        <Button label='CONTAINED' className='contained mx-2' />
                        <Button label='TEXT' className='text mx-2' />
                    </div>


                </div>

                <div className='py-4'>
                    <h1>Component: Table</h1>
                    <p className='text-muted'>Tables display sets of data. They can be fully customized.</p>
                    <Table title='List Of Data' col={col} dataSource={user}/>
                </div>

                {/* <div className='py-4'>
                    <h1>Component : Modal</h1>
                    <p className='text-muted'>The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else.</p>
                    <h2 className='py-2'>Basic Modal</h2>
                    <p className='text-muted'>Here is a sample of Modal</p>
                    <SMModal title='SMModal' innerText={<p>asf fd b fgtgff tyhfgh f hgtu htu</p>}/>
                </div> */}

            </div>
        </div>
    )
}
export default Display;
