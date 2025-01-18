import React from "react";


//create your first component
const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <div className="container">
                <p className="mb-0">&copy; Your Website 2025. All rights reserved.</p>
                <p>
                    Follow us: 
                    <a href="#" className="text-white mx-2">Facebook</a> | 
                    <a href="#" className="text-white mx-2">Instagram</a> | 
                    <a href="#" className="text-white mx-2">Twitter</a>
                 </p>
            </div>
        </footer>
    );
}; 

export default Footer;