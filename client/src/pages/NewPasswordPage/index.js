import { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../LoginPage/index.scss'

function NewPasswordPage(){

    const [validUrl, setValidUrl] = useState(false);
	const [password, setPassword] = useState("");
	const [msg, setMsg] = useState("");
	const [error, setError] = useState("");
	const param = useParams();
	const url = `http://localhost:3001/api/reset-password/${param.id}/${param.token}`;

	useEffect(() => {
		const verifyUrl = async () => {
			try {
				await axios.get(url);
				setValidUrl(true);
			} catch (error) {
				setValidUrl(false);
			}
		};
		verifyUrl();
	}, [param, url]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post(url, { password });
			setMsg(data.message);
			setError("");
			window.location = "/login";
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
        
        <Fragment>
			{validUrl ? (
                <div className='container'>
                    <form onSubmit={handleSubmit}>
                            <h1>CREATE NEW PASSWORD</h1>
                        <div className="inset">
                            <label htmlFor="password">PASSWORD</label>
                            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}
							value={password}/>
                            <p className='text-secondary'>Make sure to remember your password</p>
                            <div className="p-container text-center">
                                <input  type="submit" name="go" id="go" value="Reset"/>
                            </div>
                            {error && <div className='error_msg'>{error}</div>}
						    {msg && <div className='success_msg'>{msg}</div>}
                        </div>
                        
                    </form>
                </div> 

			) : (
				<h1>404 Not Found</h1>
			)}
		</Fragment>
    )


}

export default NewPasswordPage;