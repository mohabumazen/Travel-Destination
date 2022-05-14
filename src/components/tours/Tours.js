function Tours(props){
    return(
        <>
            <img src={props.img} alt={props.alt}></img>
            <h2>{props.title}</h2>
        </>
    )

}

export default Tours;