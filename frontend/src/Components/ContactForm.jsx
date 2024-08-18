import React from "react";
import studyingGirl from "../assets/sleepingGirl.svg";
import Swal from 'sweetalert2';


function App() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "7e600731-ef74-4be4-9c0f-75646e26c247");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });
        }
    };

    return (
        <div className="lg:flex-row items-center pb-5 ">
            <div className="w-64 lg:w-72 flex justify-center lg:justify-start">
                <img src={studyingGirl} alt="sleepingTextBookGirl" className="max-w-full h-auto" />
            </div>
            <div className="bg-black w-full lg:w-96 p-6 lg:p-8 rounded-lg">
                <h2 className="text-white text-2xl mb-4">Contact Us</h2>
                <form onSubmit={onSubmit} className="text-white font-poppins">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="bg-black mb-4 w-full border-b-2 border-gray-500 text-white p-2 rounded focus:outline-none focus:border-purple-600"
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        className="bg-black mb-4 w-full border-b-2 border-gray-500 text-white p-2 rounded focus:outline-none focus:border-purple-600"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="bg-black mb-4 w-full border-b-2 border-gray-500 text-white p-2 rounded focus:outline-none focus:border-purple-600"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        className="bg-black mb-4 w-full h-40 border-b-2 border-gray-500 text-white p-2 rounded focus:outline-none focus:border-purple-600"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-purple-600 w-full text-white p-2 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    >
                        SUBMIT FORM
                    </button>
                </form>
            </div>
        </div>
    );
}

export default App;