import React, { SyntheticEvent, useState } from "react";

export function Header() {
    return(
        <div className="header"></div>
    )
}

type SideButtonInfo = {
    name: string;
    handler: () => void;
}
export function SideButton(props: SideButtonInfo) {
    return(
        <button className="side-button" onClick={props.handler}>{props.name}</button>
    )
}

export function EventForm() {
    const initialState = {
        name : "",
        address: "",
        date: "",
        startTime: "",
        endTime: "",
        tags: "",
        registration: "",
        fees: 0.0,
        description: "",
        url: ""
    }
    const [formData, setFormData] = useState({
        ...initialState
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        setFormData((prevData) => ({...prevData, [name] : value}));
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(formData);
    }

    const handleDiscard = () => {
        setFormData(initialState);
    }

    return(
        <form className="event-form" onSubmit={handleSubmit}>
            <div className="name-field">
                <label htmlFor="name">Event Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
            </div>

            <div className="address-field">
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" value={formData.address} onChange={handleChange}/>
            </div>

            <div className="date-time-field">
                <div className="date-field">
                    <label htmlFor="date">Date:</label> 
                    <input type="text" id="date" name="date" value={formData.date} onChange={handleChange}/>
                </div> 

                <div className="time-field">
                    <label htmlFor="time">Time:</label> 
                    <div id="time">
                        <input type="text" id="startTime" name="startTime" value={formData.startTime} onChange={handleChange}/>
                        -
                        <input type="text" id="endTime" name="endTime" value={formData.endTime} onChange={handleChange}/>
                    </div>
                </div>
            </div>

            <div className="tags-field">
                <label htmlFor="tags">Category Tags:</label>
                <textarea id="tags" name="tags" value={formData.tags} onChange={handleChange}/>
            </div>

            <div className="registration-field">
                <label htmlFor="registration">Registration Required:</label>
                <div id="registration" className="registration-options">
                    <label htmlFor="yes">Yes</label>
                    <input type="radio" id="yes" name="registration" value="yes" onChange={handleChange} checked/>

                    <label htmlFor="no">No</label>
                    <input type="radio" id="no" name="registration" value="no" onChange={handleChange}/>
                </div>
            </div>

            <div className="fees-field">
                <label htmlFor="fees">Fees:</label>
                <input type="text" id="fees" name="fees" value={formData.fees} onChange={handleChange}/>
                CAD
            </div>

            <div className="url-field">
                <label htmlFor="url">Event URL:</label>
                <input type="text" id="url" name="url" value={formData.url} onChange={handleChange}/>
            </div>

            <div className="description-field">
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" value={formData.description} onChange={handleChange}/>
            </div>

            <div className="button-field">
                <button className="submit-button" onClick={handleSubmit}>Submit</button>
                <button className="discard-button" onClick={handleDiscard}>Discard</button>
            </div>
        </form>
    )
}