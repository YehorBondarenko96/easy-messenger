import React from 'react';
import './NickNameForm.vodule.css';

interface NickNameFormProps {
    onSubmit: (name: string) => void;
}

export const NickNameForm: React.FC<NickNameFormProps> = ({ onSubmit }) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const input = event.currentTarget.elements.namedItem('nickname') as HTMLInputElement;
    if (input) {
        onSubmit(input.value);
        input.value = '';
    }
    };

    return (
    <form className='formName' onSubmit={handleSubmit}>
        <input
        id="nickname"
        className= "input"
        placeholder="Please, enter your name"
        />
        <button type="submit">Submit</button>
    </form>
    );
};
