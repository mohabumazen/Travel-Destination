function Tours(props){
    return(
        <>
            <img src={props.img} alt={props.alt}></img>
            <p>{props.title}</p>
        </>
    )

}

export default Tours;