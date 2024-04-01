import React from 'react';
import css from "./NickNameForm.module.css";

interface NickNameFormProps {
    onSubName: (name: string) => void;
}

export const NickNameForm: React.FC<NickNameFormProps> = ({ onSubName }) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const input = event.currentTarget.elements.namedItem('nickname') as HTMLInputElement;
    if (input) {
        onSubName(input.value);
        input.value = '';
    }
    };

    return (
    <form className={css.form} onSubmit={handleSubmit}>
        <input
        id="nickname"
        className= {css.input}
        placeholder="Please, enter your name"
        />
        <button type="submit">Submit</button>
    </form>
    );
};
