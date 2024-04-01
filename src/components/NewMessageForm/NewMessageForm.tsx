import css from "./NewMessageForm.module.css";

interface NewMessageFormProps {
    onSubNewM: (newMes: string) => void;
}

export const NewMessageForm: React.FC<NewMessageFormProps> = ({ onSubNewM }) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const input = e.currentTarget.elements.namedItem('newMes') as HTMLInputElement;
        if (input) {
            onSubNewM(input.value);
            input.value = '';
        }
    };

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <input
                id="newMes"
                className={css.input}
                placeholder="Please, enter your message"
            />
            <button className={css.button} type="submit">Submit</button>
        </form>
    );
};
