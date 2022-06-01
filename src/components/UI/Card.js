const Card = (props) =>{

    return (
        <div class="bg-white rounded-lg mx-44 shadow-2xl">
            {props.children}
        </div>
    );

};

export default Card;