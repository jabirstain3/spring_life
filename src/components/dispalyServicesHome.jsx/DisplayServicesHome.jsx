import { useEffect, useState } from "react";
import ServicesCard from "../servicesCard/ServicesCard";

const DisplayServicesHome = ( ) => {
    const [items, setItems] = useState([]);
    // console.log(cat);
    
    useEffect(() => {
        fetch('services_data.json')
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                setItems(data.slice(0, 6));             
            })
            .catch((error) => {
                console.error('Error fetching Services:', error);
            });
    }, []);

    
    return (
        <div className="sectionBase border mx-auto my-4">
            <h1 className="text-[2.5rem] font-bold text-center my-4">Our Service</h1>
            <div className="flex flex-wrap justify-center gap-4">
                { items.length > 0 ? 
                        items.map((item) => <ServicesCard key={item.id} services={item} /> )
                : (
                    <div className="w-full border rounded-lg flex justify-center items-center h-[360px]">
                        <p className="">No services available.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DisplayServicesHome;