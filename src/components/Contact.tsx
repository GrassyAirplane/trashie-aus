"use client"
import { useState } from 'react';
import './Contact.css'

// FieldGroup Component
const FieldGroup = (props: { label: any; }) => {
    const { label } = props;
    const [isRaised, setIsRaised] = useState(false);
  
    return (
      <div className="form__field-group">
        <label className={`form__label ${isRaised && 'form__label--raised'}`}>{label}</label>
        <input
          className="form__input"
          onFocus={() => setIsRaised(true)}
          onBlur={(e) => e.target.value.length < 1 && setIsRaised(false)}
        />
      </div>
    );
  };


const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <>
            <section className='contact-section' id='contact'>
            <form
                className="form"
                onSubmit={e => e.preventDefault()}
            >
                <h3 className="form__title">Contact Details</h3>
                <FieldGroup label="Name"/>
                <FieldGroup label="Email"/>
                <input
                    className="form__submit"
                    type="submit"
                    value="Submit"
                    onClick={(e) => (e.target as HTMLInputElement).blur()}
                />
            </form>
            {/* <div className='circle'>
                E
            </div> */}
            </section>
        </>
    )
}

export default Contact