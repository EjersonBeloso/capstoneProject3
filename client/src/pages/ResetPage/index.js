import { useState } from 'react';
import axios from 'axios';
import '../LoginPage/index.scss'

function ResetPage(){
    const [email, setEmail] = useState("");
	const [msg, setMsg] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = `http://localhost:3001/api/reset-password`;
			const { data } = await axios.post(url, { email });
			setMsg(data.message);
			setError("");
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
				setMsg("");
			}
		}
	};

    return(
        <div className='container'>
            <form onSubmit={handleSubmit}>
                    <h1 className='text-light'>FORGOT PASSWORD</h1>
                <div className="inset">
                    <label htmlFor="email">EMAIL ADDRESS</label>
                    <input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                       <p className='text-secondary'>We will send you a link to reset your password</p>
                    <div className="p-container text-center">
                        <input  type="submit" name="go" id="go" value="Send "/>
                    </div>
                    {error && <div className='error_msg'>{error}</div>}
				    {msg && <div className='success_msg'>{msg}</div>}
                </div>
                
            </form>
        </div>
    )


}

export default ResetPage;