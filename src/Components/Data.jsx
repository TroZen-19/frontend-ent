import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Data = () => {
    const [d, setD] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const adminUsername = 'admin';
    const adminPassword = 'password';

    useEffect(() => {
        if (isAuthenticated) {
            const getData = async () => {
                const res = await fetch('https://backend-ent.onrender.com/getData');
                const data = await res.json();
                console.log(data);
                setD(data.data);
            }
            getData();
        }
    }, [isAuthenticated]);

    const handleLogin = () => {
        if (username === adminUsername && password === adminPassword) {
            setIsAuthenticated(true);
        } else {
            alert('Invalid credentials');
        }
    };

    // Define styles
    const containerStyle = {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f0f8ff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    };

    const dataContainerStyle = {
        width: '80%',
        maxWidth: '1200px',
        margin: '20px auto'
    };

    const dataItemStyle = {
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '20px',
        margin: '10px 0',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    };

    const headingStyle = {
        color: '#333',
        marginBottom: '20px',
        fontSize: '2em',
        textAlign: 'center'
    };

    const detailStyle = {
        marginBottom: '10px',
        color: '#555'
    };

    const loginContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    };

    const inputStyle = {
        padding: '15px',
        margin: '10px 0',
        borderRadius: '5px',
        border: '1px solid #ddd',
        width: '300px'
    };

    const buttonStyle = {
        padding: '15px 30px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#007bff',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '16px'
    };

    const buttonHoverStyle = {
        backgroundColor: '#0056b3'
    };

    return (
        <div style={containerStyle}>
            {!isAuthenticated ? (
                <div style={loginContainerStyle}>
                    <h1 style={headingStyle}>Admin Login</h1>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={inputStyle}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={inputStyle}
                    />
                    <button
                        onClick={handleLogin}
                        style={{ ...buttonStyle, ...buttonHoverStyle }}
                        onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                        onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
                    >
                        Login
                    </button>
                </div>
            ) : (
                <div style={dataContainerStyle}>
                    <h1 style={headingStyle}>Interested User's information</h1>
                    <Link style = {{color: 'blue'}} to = "/">Go back to home page</Link>
                    {d && d.map((eachData, index) => {
                        return (
                            <div key={index} style={dataItemStyle}>
                                <div style={detailStyle}><strong>Name:</strong> {eachData.name}</div>
                                <div style={detailStyle}><strong>Email:</strong> {eachData.email}</div>
                                <div style={detailStyle}><strong>Mobile:</strong> {eachData.mobile}</div>
                                <div style={detailStyle}><strong>Interested Country:</strong> {eachData.interestedcountry}</div>
                                <div style={detailStyle}><strong>Nearest Office:</strong> {eachData.nearestoffice}</div>
                                <div style={detailStyle}><strong>Course Interest:</strong> {eachData.courseinterest}</div>
                                <div style={detailStyle}><strong>Created At:</strong> {new Date(eachData.createdAt).toLocaleDateString()}</div>
                            </div>
                        )
                    })}
                </div>
            )}

        </div>
    )
}

export default Data;
