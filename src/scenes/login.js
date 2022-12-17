import React from 'react';
import '../styles/general.css'
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import axios from "axios"
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff'
import { eye } from 'react-icons-kit/feather/eye'
import { useHistory } from 'react-router'
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';


function Login() {
    // let nav = useNavigate()
    // const [cookies, setCookie] = useCookies('state')
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    const cookies = new Cookies();

    useEffect(() => {
        axios.get(`http://127.0.0.1:5000//login`, {
            headers: {
                "Access-Control-Allow-Headers": "Content-Type",
            },
        })
            .then((res) => {
                console.log(res)
                // setCookie('state', res.data.state, { path: '/' })

                cookies.set('state', res.data.state, { path: '/' });
                // cookies.get('myCat')

                localStorage.setItem('state', (res.data.state));
                window.location.assign(res.data.auth_url)
            })
            .catch((err) => console.log(err));
        return () => {
        }
    }, [])
    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text');
        }
        else {
            setIcon(eyeOff);
            setType('password');
        }
    }
    return (
        <div>
            <div className="container" id="login">
                <form action="" method="POST" autoComplete="on">
                    <div>
                        <h1 className="title has-text-grey">Đăng nhập</h1>
                        <div className="box">
                            <div className="field">
                                <input
                                    type="email"
                                    className="item input"
                                    name="email"
                                    placeholder="Email"
                                    required=""
                                    defaultValue=""
                                />
                            </div>
                            <div className="field">
                                <input
                                    type="password"
                                    id="password"
                                    className="item input"
                                    name="password"
                                    placeholder="Mật khẩu"
                                    required=""
                                    defaultValue=""
                                />
                                <span onClick={handleToggle}><Icon icon={icon} size={20} /></span>
                            </div>
                            <button type="submit" className="item button is-signin">
                                Đăng nhập
                            </button>
                            <div className="is-divider">
                                <span>HOẶC</span>
                            </div>
                            <button className="item button is-signupGG">
                                <i className="fa-brands fa-google" />
                                Đăng nhập với Google
                            </button>
                        </div>
                        <p className="has-text-grey has-text-right">
                            <a href="./register.html">Đăng ký</a> |{" "}
                            <a href="./resetPassword.html">Quên mật khẩu</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Login