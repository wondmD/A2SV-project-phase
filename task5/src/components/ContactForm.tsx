
import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"
import { watch } from "fs/promises"

type contactMessage = {
    name: string
    email: string
    message: string
}

export const ContactForm = () => {
    const form = useForm<contactMessage>({
        defaultValues: {
            name: "",
            email: "",
            message: ""
        }
    });
    const { register, control, handleSubmit, formState, watch } = form

    const { errors } = formState;

    const watchName = watch("name");

    const onSubmit = (data: contactMessage) => {
        console.log(data, "form submission")
        alert( "hey " + data.name + "Your form is submitted !\n\nEmail - " + data.email + "\n\nMessage - " + data.message)
        // submit the form data to your server
    }

    return (
        <div>
            <h1 className="heading">Contact-Form</h1>
            <p>Hello{watchName}</p>
            <div className="form-container" onSubmit={handleSubmit(onSubmit)}>
                <form className="form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            {...register('name', {
                                required: {
                                    value: true,
                                    message: 'Name is required'
                                }
                            })}
                            placeholder="Enter your name" />
                        <p>{errors.name?.message}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            {...register('email', {
                                pattern: {
                                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                                    message: "Invalid email address"
                                },
                                required: {
                                    value: true,
                                    message: 'email is required'
                                }
                            })}
                            placeholder="Enter your email" />
                            <p>{errors.email?.message}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="textarea">Message</label>
                        <textarea
                            {...register('message', {
                                required: {
                                    value: true,
                                    message: 'Message is required'
                                },
                                minLength: {
                                    value: 10,
                                    message: "Message should have atleast 10 characters"
                                },
                                maxLength: {
                                    value: 500,
                                    message: "Message should not exceed 500 characters"
                                },
                            })}
                        />      
                        <p>{errors.message?.message}</p>   
            </div>
            <button type="submit" className="form-submit-btn">Submit</button>
        </form>
        <DevTool control={control} />
            </div >
        </div >
    )
}