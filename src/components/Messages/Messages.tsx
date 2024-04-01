import css from "./Messages.module.css";

type Mess = {
    id: string;
    type: string,
    name: string,
    message: string
};

interface MessagesProps {
    messages:Mess[]
}

export const Messages: React.FC<MessagesProps> = ({ messages }) => {
    const newData = (): string => {
    const now = new Date();
    return now.toLocaleString(); 
};

    const chatItems = messages.map(({ id, type, name, message }) => {
        const className = type === 'you' ? css.yourMessage : css.usersMessage;
        const sender = type === 'you' ? "You" : name;
        return <p key={id} className={[css.message, className].join(' ')}>{sender}: {message} {newData()}</p>
    });
    
    return (
        <>
            <div className={css.auxiliaryDiv}></div>
            <div className={css.divChat}>
            {chatItems}
        </div>
        </>
    )
};