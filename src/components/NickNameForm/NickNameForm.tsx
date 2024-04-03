import css from "./NickNameForm.module.css";
import { useRef, useEffect } from 'react';

interface NickNameFormProps {
    onSubName: (name: string) => void;
}

export const NickNameForm: React.FC<NickNameFormProps> = ({ onSubName }) => {
    const formNameRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const input = event.currentTarget.elements.namedItem('nickname') as HTMLInputElement;
    if (input) {
        onSubName(input.value);
        input.value = '';
    }
    };

    useEffect(() => {
        if (formNameRef.current) {
            
        }
    });

    return (
    <form ref={formNameRef} className={css.form} onSubmit={handleSubmit}>
        <input
        id="nickname"
        className= {css.input}
        placeholder="Please, enter your name"
        />
        <button className={css.button} type="submit">Submit</button>
    </form>
    );
};
