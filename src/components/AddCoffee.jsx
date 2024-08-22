import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name, quantity, supplier, taste, category, details, photo};
        console.log(newCoffee)
        // send data to the server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className='text-5xl text-center pb-8 text-pink-900'>Add a Coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* Form row: name & quantity */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-pink-900">Coffee Name</span>
                        </label>
                        <input 
                            type="text"
                            name="name" 
                            placeholder="Coffee Name" 
                            className="input input-bordered w-full" 
                        />
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-pink-900">Quantity</span>
                        </label>
                        <input 
                            type="text" 
                            name="quantity"
                            placeholder="Quantity" 
                            className="input input-bordered w-full" 
                        />
                    </div>
                </div>
                {/* Form row: supplier & taste */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-pink-900">Supplier</span>
                        </label>
                        <input 
                            type="text"
                            name="supplier" 
                            placeholder="Supplier Name" 
                            className="input input-bordered w-full" 
                        />
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-pink-900">Taste</span>
                        </label>
                        <input 
                            type="text" 
                            name="taste"
                            placeholder="Taste" 
                            className="input input-bordered w-full" 
                        />
                    </div>
                </div>
                {/* Form row: category & details */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-pink-900">Category</span>
                        </label>
                        <input 
                            type="text"
                            name="category" 
                            placeholder="Coffee Name" 
                            className="input input-bordered w-full" 
                        />
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-pink-900">Details</span>
                        </label>
                        <input 
                            type="text" 
                            name="details"
                            placeholder="Details" 
                            className="input input-bordered w-full" 
                        />
                    </div>
                </div>
                {/* Form row: photo */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text text-pink-900">Photo URL</span>
                        </label>
                        <input 
                            type="text"
                            name="photo" 
                            placeholder="Photo URL" 
                            className="input input-bordered w-full" 
                        />
                    </div>
                </div>
                <input type="submit" value="ADD COFFEE" className="btn btn-block mt-4" />
            </form>
        </div>
    );
};

export default AddCoffee;