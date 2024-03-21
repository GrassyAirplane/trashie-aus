"use client"
import { useState } from 'react';
import './Contact.css';

interface FieldGroupProps {
    label: string;
    setValue: (value: string) => void;
    value_input: string;
}

// FieldGroup Component
const FieldGroup: React.FC<FieldGroupProps> = ({ label, setValue, value_input }) => {
    const [isRaised, setIsRaised] = useState(false);

    const handleChange = (e: { target: { value: any; }; }) => {
        setValue(e.target.value);
    };

    return (
        <div className="form__field-group">
            <label className={`form__label ${isRaised && 'form__label--raised'}`}>{label}</label>
            <input
                className="form__input"
                onFocus={() => setIsRaised(true)}
                onBlur={(e) => e.target.value.length < 1 && setIsRaised(false)}
                onChange={handleChange}
                value={value_input}
            />
        </div>
    );
};

const FieldGroupInput: React.FC<FieldGroupProps> = ({ label, setValue, value_input }) => {
    const [isRaised, setIsRaised] = useState(false);

    const handleChange = (e: { target: { value: any; }; }) => {
        setValue(e.target.value);
    };

    return (
        <div className="form__field-group form__field-group-query">
            <label className={`form__label ${isRaised && 'form__label--raised--query'} form__label_query`}>{label}</label>
            <textarea
                className="form__input form__input_query"
                onFocus={() => setIsRaised(true)}
                onBlur={(e) => e.target.value.length < 1 && setIsRaised(false)}
                onChange={handleChange}
                value={value_input}
            />
        </div>
    );
};

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [query, setQuery] = useState("");

    const sendToDiscord = async (name: string, email: string, query: string) => {
        const webhookURL = "https://discord.com/api/webhooks/1217287603347259474/sTWBhhfWGXGjlPZNcTLqgvoAEMfvK4z7PG92mSfe6t3fPHzQA-fkDPQRwCpRo_tcVpBH"; // Replace this with your Discord webhook URL
    
        const payload = {
            content: `**Message** At ${(new Date()).toString()}\nFrom ${name} \n **${email}** \`\`\`${query}\`\`\`----------`
        };
    
        try {
            const response = await fetch(webhookURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
    
            if (response.ok) {
                console.log("Message sent to Discord successfully!");
            } else {
                console.error("Failed to send message to Discord:", response.statusText);
            }
        } catch (error) {
            console.error("Error sending message to Discord:", error);
        }
    };

    const onSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(name);
        console.log(email);
        if (name && email && query) {
            sendToDiscord(name, email, query)
            // If name and email are not empty, clear them
            setName("");
            setEmail("");
            setQuery("");

            // Navigate to the next route '/ending'
            // window.location.href = "/ending";
        }
    };

    return (
        <>
            <section className='contact-section' id='contact'>
                <div className='contact-upper-half'>                    
                </div>
                <div className='contact-lower-half'>

                </div>
                <form className="form" onSubmit={onSubmit}>
                    <h3 className="form__title">Got a question?</h3>
                    <FieldGroup label="Name" setValue={setName}   value_input={name}/>
                    <FieldGroup label="Email" setValue={setEmail} value_input={email}/>
                    <div className='contact-form-lower'>
                        {/* <textarea className='contact-form-lower-query'></textarea> */}
                        <FieldGroupInput label="Query" setValue={setQuery} value_input={query}/>
                        <input
                            className="form__submit"
                            type="submit"
                            value="Submit"
                        />
                    </div>
                    {/* <div className='contact-query-submit'>
                        <FieldGroupInput label="Query" setValue={setQuery} value_input={query}/>
                        <input
                            className="form__submit"
                            type="submit"
                            value="Submit"
                        />
                    </div>                     */}
                </form>
            </section>
        </>
    );
};

export default Contact;

// import { useState } from 'react';
// import './Contact.css'

// // FieldGroup Component
// const FieldGroup = (props: { label: any; }) => {
//     const { label } = props;
//     const [isRaised, setIsRaised] = useState(false);
  
//     return (
//       <div className="form__field-group">
//         <label className={`form__label ${isRaised && 'form__label--raised'}`}>{label}</label>
//         <input
//           className="form__input"
//           onFocus={() => setIsRaised(true)}
//           onBlur={(e) => e.target.value.length < 1 && setIsRaised(false)}
//         />
//       </div>
//     );
//   };


// const Contact = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");

//     const onSubmit = () => {
//         console.log(name)
//         console.log(email)
//     }

//     return (
//         <>
//             <section className='contact-section' id='contact'>
//             <form
//                 className="form"
//                 onSubmit={e => e.preventDefault()}
//             >
//                 <h3 className="form__title">Contact Details</h3>
//                 <FieldGroup label="Name"/>
//                 <FieldGroup label="Email"/>
//                 <input
//                     className="form__submit"
//                     type="submit"
//                     value="Submit"
//                     onClick={onSubmit}
//                 />
//             </form>
//             {/* <div className='circle'>
//                 E
//             </div> */}
//             </section>
//         </>
//     )
// }

// export default Contact