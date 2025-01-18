import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
	return (
		<div>
			{/* Navbar */}
			<div>
				<Navbar />
			</div>

			{/* Main Content */}
			<div className="container bg-white mt-3 ">
				{/* Jumbotron */}
				<div className="row">
					<div className="col-12">
						<Jumbotron />
					</div>
				</div>

				{/* Cards Section */}
				<div className="row justify-content-center">
				<Card 
                        title="Maldives Escape" 
                        description="Relax in luxury overwater bungalows with crystal-clear waters." 
                        imgSrc="https://images.unsplash.com/photo-1549248166-7a3b3ac4ab66?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fE1hbGRpdmVzfGVufDB8fDB8fHwy" 
                    />
                    <Card 
                        title="Alaskan Adventure" 
                        description="Experience breathtaking glaciers and wildlife on an unforgettable cruise." 
                        imgSrc="https://media.istockphoto.com/id/177337061/photo/malamute.webp?a=1&b=1&s=612x612&w=0&k=20&c=e5wWJ36BmBr9_JaUnSZqtLh1o34RjFnsj4PgiFRrMC4=" 
                    />
                    <Card 
                        title="Paris Getaway" 
                        description="Fall in love with the city of lights and its iconic landmarks." 
                        imgSrc="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UGFyaXN8ZW58MHx8MHx8fDI%3D" 
                    />
                    <Card 
                        title="Safari in Kenya" 
                        description="Witness the majestic wildlife of Africa on a guided safari tour." 
                        imgSrc="https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFNhZmFyaSUyMGluJTIwS2VueWF8ZW58MHx8MHx8fDI%3D" 
                    />
                </div>
			</div>

			{/* Footer */}
			<div className="text-center">
				<Footer />
			</div>
		</div>
	);
};

export default Home;
