import React, { SyntheticEvent, useEffect, useState } from "react";
import { writeData, hello, getEvents, deleteData} from './DataApi';
import { Event, Entry } from "./Types";
import { FaTrash, FaPen } from 'react-icons/fa'

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

export function EventForm(props: Entry) {
    const initialState = props === undefined ? {
        id : null,
        name : "",
        address: "",
        date: "",
        startTime: "",
        endTime: "",
        tags: "",
        registration: "yes",
        fees: 0.0,
        description: "",
        url: ""
    } : props;
    const [formData, setFormData] = useState({
        ...initialState
    })
    const [formError, setFormError] = useState<{msg: string | null}>({msg: null})

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        console.log(value);
        setFormData((prevData) => ({...prevData, [name] : value}));
    }

    const convertToEvent = () => {
        return {
            id: null,
            organizer : "Test Organizer",
            address: formData.address,
            title: formData.name,
            startDateTime: formData.date + "T" + formData.startTime + "-08:00",
            endDateTime: formData.date + "T" + formData.endTime + "-08:00",
            description: formData.description,
            mustRegister: formData.registration == "yes",
            price: formData.fees,
            type: formData.tags,
            url: formData.url
        }
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (checkFormData()) {
            console.log(formData);
            writeData(convertToEvent());
            setFormError((prevData) => ({msg : null}));
            setView(<ManagePanel setView={setView}/>)
        } else {
            console.log(formData);
            setFormError((prevData) => ({msg : "Cannot leave the field blank"}));
        }
    }

    const checkFormData = () : boolean => {
        let isValid: boolean = true;
        Object.values(formData).forEach((val: any) => {
            if ((typeof val == "string" && val === "") || (typeof(val) === "number" && val < 0)) {
                isValid = false;
                return;
            }
        })
        console.log(isValid);
        return isValid;
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
                    <input type="date" id="date" name="date" value={formData.date} onChange={handleChange}/>
                </div> 

                <div className="time-field">
                    <label htmlFor="time">Time:</label> 
                    <div id="time">
                        <input type="time" id="startTime" name="startTime" value={formData.startTime} onChange={handleChange}/>
                        -
                        <input type="time" id="endTime" name="endTime" value={formData.endTime} onChange={handleChange}/>
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
                    <input type="radio" id="yes" name="registration" value="yes" onChange={handleChange} 
                        checked={formData.registration === "yes"}/>

                    <label htmlFor="no">No</label>
                    <input type="radio" id="no" name="registration" value="no" onChange={handleChange}
                        checked={formData.registration === "no"}/>

                </div>
            </div>

            <div className="fees-field">
                <label htmlFor="fees">Fees:</label>
                <input type="number" min="0" id="fees" name="fees" value={formData.fees} onChange={handleChange}/>
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
                {formError.msg && <div className="error-message"> {formError.msg} </div>}
                <button className="submit-button" onClick={handleSubmit}>Submit</button>
                <button className="discard-button" onClick={handleDiscard}>Discard</button>
            </div>
        </form>
    )
}

function EventEntry(childProps: Event) {
    const convertEventToEntry = (): Entry => {
        let dateAndStart = new Date(childProps.startDateTime);
        let dateAndEnd = new Date(childProps.endDateTime);
        return {
            id: childProps.id,
            name: childProps.title,
            address: childProps.address,
            date: dateAndStart.toDateString(),
            startTime: dateAndStart.toLocaleTimeString(),
            endTime: dateAndEnd.toLocaleTimeString(),
            tags: childProps.type,
            registration: childProps.mustRegister ? "yes" : "no",
            fees: childProps.price,
            description: childProps.description,
            url: childProps.url,
        }
    }
    let entry: Entry = convertEventToEntry();
    const editEntry = () => {
        console.log("woohoo");
        setView(<EventForm {...entry}/>);
    }
    const deleteEntry = async () => {
        console.log("deleteing");
        await deleteData(childProps).
        then((res) => {

            refreshEvents(getEvents());
            window.location.reload();
            console.log("done deleting");
        });
    }

    return(
        <div className="entry">
            <div className="entry-name"> {entry.name} </div>
            <div className="entry-datetime">
                <div className="entry-date">{entry.date}</div>
                <div className="entry-time">{entry.startTime} - {entry.endTime}</div>
                <div className="icons">
                    <FaPen className="edit-icon" onClick={editEntry}/>
                    <FaTrash className="delete-icon" onClick={deleteEntry}/> 
                </div>
            </div>
        </div>
    )
}

let setView: React.Dispatch<React.SetStateAction<JSX.Element>>;
let refreshEvents: React.Dispatch<React.SetStateAction<Event[]>>;

export function ManagePanel(props: {setView: React.Dispatch<React.SetStateAction<JSX.Element>>}) {
    const [events, setEvents] = useState(getEvents())
  
    
    refreshEvents = setEvents;
    setView = props.setView;
    return (
        <div className="manage-panel">
            {events.map(event => <EventEntry {...event}/>)}
        </div>
    )
}