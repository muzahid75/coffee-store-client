import Swal from 'sweetalert2'
import Header from './Header';
import addCoffeeBg from '../assets/more/11.png'
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
const AddCoffee = () => {

    const Navigate =useNavigate()

    const handleAddCoffee = (e) => {
        e.preventDefault()
        const form = e.target;

        const name = form.name.value;
        const chief = form.chief.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const imageUrl = form.imageUrl.value;

        const newCoffee = {
            name,
            chief,
            supplier,
            taste,
            category,
            details,
            imageUrl
        }

        // console.log("Product Name:", name);
        // console.log("Chief/Creator:", chief);
        // console.log("Supplier:", supplier);
        // console.log("Taste Profile:", taste);
        // console.log("Category:", category);
        // console.log("Product Details:", details);
        // console.log("Image URL:", imageUrl);
        // console.log(newCoffee)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newCoffee)
        };

        fetch('https://coffee-store-server-eight-mu.vercel.app/coffee', requestOptions)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'successful!',
                        text: 'coffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            });
    }
    return (
        <>
        <div>
            <Header></Header>
        </div>
        <div className='max-w-5xl mx-auto'><button onClick={()=>Navigate("/")} className='btn mt-3'>Back to Home</button></div>
        <div className="p-8 min-h-screen flex flex-col items-center justify-center"
        style={{
            backgroundImage: `url(${addCoffeeBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#3d2b1f', // Fixed background color
        }}>
            
            <div className="bg-[#F4F3F0] max-w-5xl w-full rounded-lg shadow-lg px-30 py-10">
                <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Add new Coffee</h2>
                <p className='text-center'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form onSubmit={handleAddCoffee} className=" space-y-6">
                    {/* First 6 Fields in Two Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Product Name<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                            />
                        </div>

                        {/* Chief Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Chief/Creator<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="chief"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                            />
                        </div>

                        {/* Supplier Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Supplier<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="supplier"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                            />
                        </div>

                        {/* Taste Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Taste Profile<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="taste"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                            />
                        </div>

                        {/* Category Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Category<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="category"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                            />
                        </div>

                        {/* Details Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Product Details<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="details"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                            />
                        </div>
                    </div>

                    {/* Image URL Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Image URL<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="url"
                            name="imageUrl"
                            placeholder="https://example.com/image.jpg"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md font-semibold text-lg w-full"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
        <div>
            <Footer></Footer>
        </div>
        </>
    );
};

export default AddCoffee;
