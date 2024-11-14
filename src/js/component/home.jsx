import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./Card";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";

//create your first component
const Home = () => {
	return (

		<div>
			<Navbar />
			<div className="container">
			<Jumbotron />
			<div className="d-flex justify-content-center row">

				<Card imagen="https://cdn2.chicmagazine.com.mx/uploads/media/2023/05/02/rocket-guardianes-galaxia-historia-origen.jpg" title="rocket" />
				<Card imagen= "https://animalxop.com/cdn/shop/articles/6c706dd1-5839-472e-9cb0-cf8ba35fa265.webp?v=1701897637" title="cocoa"/>
				<Card imagen= "https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.webp?w=1600&h=1067"title="Toby"/>
				<Card imagen= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9uJ5jIvp0Z5HkNwubc-qzeVnDDuedhCzopQ&s"title="blue"/>
			</div>
			</div>
		</div>
	);
};

export default Home;
