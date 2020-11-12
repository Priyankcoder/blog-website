import React, { useState, useEffect } from 'react';

const ContactForm = (props) => {
    const initialFieldValues = {
        firstName: '',
        lastName: '',
        title: '',
        content: ''
    }

    var [values, setValues] = useState(initialFieldValues)


    useEffect(() => {
        if (props.currentId == '')
            setValues({ ...initialFieldValues })
        else
            setValues({
                ...props.blogObjects[props.currentId]
            })
    }, [props.currentId, props.blogObjects])

    const handleInputChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        props.addOrEdit(values);
    }

    return (
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" name="firstName" placeholder="Author First Name"
                    value={values.firstName}
                    onChange={handleInputChange}
                />
            </div>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-user"></i>
                        </div>
                    </div>

                    <input className="form-control" name="lastName" placeholder="Author Second Name"
                        value={values.lastName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i class="fas fa-edit"></i>
                        </div>
                    </div>
                    <textarea className="form-control" name="title" placeholder="Title"
                        value={values.title}
                        onChange={handleInputChange}
                    />
                </div>
            <div className="form-group">
               <textarea className="form-control" name="content" placeholder="Content"
                    value={values.content}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input type="submit" value={props.currentId == "" ? "Save" : "Update"} className="btn btn-primary btn-block" />
            </div>
        </form>
    );
}

export default ContactForm;