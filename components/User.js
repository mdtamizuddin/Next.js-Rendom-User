import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Loading from "./Loading";


const User = () => {
    const [number, setNumber] = useState(0)
    const { isLoading, data, refetch } = useQuery([`${number} User`], () =>
        fetch('https://api.randomuser.me/').then(res =>
            res.json()
        )
    )

    const user = data?.results[0]

    if (isLoading) {
        return <Loading />
    }
    return (
        <div >
            <button
                onClick={() => {
                    refetch()
                    setNumber(number + 1)
                }}
                className="btn btn-ghost ml-5 shadow-lg shadow-secondary 
                                mt-10">
                Reload Data
            </button>
            < div className="container mx-auto my-5 py-10 p-5" >
                <div className="md:flex no-wrap md:-mx-2 ">
                    {/* Left Side */}
                    <div className="w-full md:w-3/12 md:mx-2">
                        {/* Profile Card */}
                        <div className="bg-white p-3 border-t-4 border-secondary">
                            <div className="image overflow-hidden shadow-primary shadow-lg rounded-2xl">
                                <img className="h-auto w-full mx-auto " src={user.picture.large} alt={'user-image'} />
                            </div>
                            <h1 className="text-gray-900  font-bold text-xl mt-8 leading-8 my-1">
                                {
                                    user.name.title + ". "
                                }

                                {
                                    user.name.first + " "
                                }
                                {
                                    user.name.last
                                }
                            </h1>
                            <h3 className="text-gray-600 font-lg text-semibold leading-6">
                                {user.email}
                            </h3>

                        </div>
                        {/* End of profile card */}
                        <div className="my-4" />

                    </div>
                    {/* Right Side */}
                    <div className="w-full md:w-9/12 mx-2 h-64 ">
                        {/* Profile tab */}
                        {/* About Section */}
                        <div className="bg-white p-3  py-14 rounded-sm">
                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                <span clas="text-green-500">
                                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </span>
                                <span className="tracking-wide">About</span>
                            </div>
                            <div className="text-gray-700">
                                <div className="grid md:grid-cols-2 text-sm">
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">First Name</div>
                                        <div className="px-4 py-2">
                                            {
                                                user.name.first
                                            }
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Last Name</div>
                                        <div className="px-4 py-2">
                                            {
                                                user.name.last
                                            }
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Gender</div>
                                        <div className="px-4 py-2">{user.gender}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Age</div>
                                        <div className="px-4 py-2">
                                            {user.dob.age}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Country</div>
                                        <div className="px-4 py-2">{user.location.country}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">street</div>
                                        <div className="px-4 py-2">{user.location.street.number + " " + user.location.street.name}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">State</div>
                                        <div className="px-4 py-2">{user.location.state}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Sity</div>
                                        <div className="px-4 py-2">{user.location.city}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Postcode</div>
                                        <div className="px-4 py-2">{user.location.postcode}</div>
                                    </div>



                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Birthday</div>
                                        <div className="px-4 py-2">
                                            {user.dob.date}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Email.</div>
                                        <div className="px-4 py-2">
                                            <p className="text-blue-800 cursor-pointer" >{user.email}</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Contact</div>
                                        <div className="px-4 py-2">
                                            <p className="text-blue-800 cursor-pointer" >{user.phone}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* End of about section */}
                        <div className="my-4" />

                        {/* End of profile tab */}
                    </div>
                </div>

            </div >

        </div >
    );
}

export default User;