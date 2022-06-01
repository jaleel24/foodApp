
const Input = (props) =>{
    return(
        <div class="flex py-1 px-3">
            <label htmlFor={props.input.id} class="px-3">{props.label}</label>
            <input {...props.input} class="bg-slate-50"/>
        </div>
    );
};

export default Input;