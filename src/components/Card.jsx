import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Card = ({ coffee, coffees, setCoffees }) => {
    // console.log(coffee)
    const { _id, imageUrl, name, chief } = coffee;

    const handleDelete = (_id) => {
        // console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                //   Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                //   });

                fetch(`https://coffee-store-server-eight-mu.vercel.app/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(c => c._id !== _id);
                            setCoffees(remaining);
                        }
                    })
            }
        });
    }
    return (
        <div className="flex shadow-2xl rounded-2xl p-5">
            <figure>
                <img className="h-[200px] w-[200px] object-cover"
                    src={imageUrl}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Name : {name}</h2>
                <p>Cheif : {chief}</p>
            </div>
            <div className="flex flex-col justify-center">
                <div className="flex flex-col space-y-2 w-32">
                    <Link to={`/coffeeDetails/${_id}`} className="w-full">
                        <button className="btn w-full">View</button>
                    </Link>
                    <Link to={`/updateCoffee/${_id}`} className="w-full">
                        <button className="btn w-full">Edit</button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="btn w-full">Delete</button>
                </div>

            </div>
        </div>
    );
};
Card.propTypes = {
    coffee: PropTypes.object.isRequired,
    coffees: PropTypes.array.isRequired,
    setCoffees: PropTypes.array.isRequired,
}

export default Card;