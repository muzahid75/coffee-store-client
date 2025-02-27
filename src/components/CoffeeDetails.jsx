import { useLoaderData, useNavigate } from "react-router-dom";
import Header from "./Header";
import coffeeDetailsBg from '../assets/more/11.png'
import Footer from "./Footer";

const CoffeeDetails = () => {
    const coffeeDetails = useLoaderData();

    const Navigate = useNavigate()

    return (
        <>
            <div>
                <Header></Header>
            </div>
            <div className='max-w-5xl mx-auto'><button onClick={() => Navigate("/")} className='btn mt-3'>Back to Home</button></div>
            <div className=" pb-5"
                style={{
                    backgroundImage: `url(${coffeeDetailsBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#3d2b1f', // Fixed background color
                }}>
                <div className="max-w-5xl bg-[#F4F3F0] mx-auto rounded-lg shadow-md p-8 mt-5">
                    <h1 className="text-2xl font-bold text-center mb-8 text-amber-900">
                        {coffeeDetails.name} Details
                    </h1>

                    <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-8">
                        {/* Coffee Image */}
                        <div className="h-96 overflow-hidden rounded-lg">
                            <img
                                src={coffeeDetails.imageUrl}
                                alt={coffeeDetails.name}
                                className="w-[351px] h-[351px] object-cover"
                            />
                        </div>

                        {/* Coffee Details */}
                        <div className="space-y-4">
                            <p className="text-lg">
                                <span className="font-semibold">Category:</span> {coffeeDetails.category}
                            </p>
                            <p className="text-lg">
                                <span className="font-semibold">Chief:</span> {coffeeDetails.chief}
                            </p>
                            <p className="text-lg">
                                <span className="font-semibold">Supplier:</span> {coffeeDetails.supplier}
                            </p>
                            <p className="text-lg">
                                <span className="font-semibold">Taste:</span> {coffeeDetails.taste}
                            </p>
                            <p className="text-lg">
                                <span className="font-semibold">Details:</span> {coffeeDetails.details}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </>
    );
};

export default CoffeeDetails;