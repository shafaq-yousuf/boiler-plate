import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { userLogin } from './firebaseMethods';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add } from '../redux/reducer/loginSlice';

const Login = () => {
    const [model, setModel] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let loginUser = () => {
        userLogin(model).then((res) => { console.log("login successfully") }).catch((err) => { console.log(err.message) })
        // dispatch(add(model));
        // navigate('/form');
    };
    return (
        <>
            <div className="container py-3">
                <div><h1 className="fw-bold p-2">Login</h1></div>
                <div className="row">
                    <div className="col-md-6 py-3">
                        <input onChange={(e) => setModel({ ...model, email: e.target.value })} type="email" name="email" id="email" placeholder="Email@.com" className="rounded p-2 w-75 my-1" />
                        <input onChange={(e) => setModel({ ...model, password: e.target.value })} type="password" name="password" id="password" placeholder="Enter Password"
                            className="rounded p-2 w-75 my-1" />
                        <button className="my-2 py-1 text-center text-dark bg-light rounded border-dark w-25 mx-2"
                            onClick={loginUser}>Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;