import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CardCoffee = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
    const handleDelete = _id => {
        console.log(_id);
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
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your coffee has been deleted.",
                            icon: "success"
                        }); 
                        const remaining = coffees.filter(cof => cof._id !== _id);
                        setCoffees(remaining);                       
                    }
                }) 
            }
        });
    }
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          alt="Movie"
        />
      </figure>
      <div className="flex justify-between w-full pr-4">
        <div className="pl-4">
          <h2 className="card-title">{name}</h2>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
        </div>
        <div className="justify-end space-y-4">
          <button className="btn">View</button>
          <br />
          <Link to={`updateCoffee/${_id}`}>
            <button className="btn">Edit</button>
          </Link>
          <br />
          <button 
            onClick={() => handleDelete(_id)} 
            className="btn bg-orange-800"
          >X</button>
        </div>
      </div>
    </div>
  );
};

export default CardCoffee;
