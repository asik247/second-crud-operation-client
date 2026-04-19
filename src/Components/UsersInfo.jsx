import React from 'react';

const UsersInfo = () => {
    const handlePost = (e)=>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const userValue = {name,email}
        console.log("handlePost clicked",userValue);
        
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <h1 className='font-bold text-2xl'>User Info</h1>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handlePost}>
                                <fieldset className="fieldset">
                                    {/* Name field */}
                                    <label className="label">Name</label>
                                    <input type="text" name='name' className="input" placeholder="Name" />
                                    {/* Email field */}
                                    <label className="label">Email</label>
                                    <input type="email" name='email' className="input" placeholder="Email" />
                                    <button className="btn btn-neutral mt-4">Add</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsersInfo;