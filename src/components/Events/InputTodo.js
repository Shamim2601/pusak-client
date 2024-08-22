import React, { Fragment, useState } from 'react';
import config from '../../config'; // Import the configuration file

const InputTodo = () => {
    const [description, setDescription] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch(`${config.apiBaseUrl}/todos`, {
                method: "POST",
                headers: { "Content-Type": "application/json" }, // Corrected Content-Type
                body: JSON.stringify(body)
            });

            console.log(response.status);
            if (response.status === 201 || response.status === 200) {
                window.location = '/'; // Reload the page if the request was successful
            } else {
                console.error("Failed to add todo");
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <Fragment>
            <div className="container mt-5">
                <h1 className="text-center mt-5">Event List</h1>
                <form className="d-flex mt-4" onSubmit={onSubmitForm}>
                    <input
                        type="text"
                        className="form-control me-2"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter an event"
                    />
                    <button type="submit" className="btn btn-success">
                        Add Event
                    </button>
                </form>
            </div>
        </Fragment>
    );
}

export default InputTodo;
