import './Cards.css';

function Cards(props) {
    return (
        <div className="hero-card">
        <img src={props.url}></img>
            <div className="hero-name"><b>Герой</b>: {props.name} </div>  
            <div className="hero-universe"><b>Вселенная</b>: {props.universe}</div>
            <div className="hero-alterego"><b>Альтер-Эго</b>: {props.alterego}</div>
            <div className="hero-occupation"><b>Деятельность</b>:{props.occupation}</div>
            <div className="hero-friends"><b>Друзья</b>: {props.friends}</div>
            <div className="hero-superpowers"><b>Супер-сила</b>: {props.superpowers}</div>
            <div className="hero-info"><b>Инфо</b>: {props.info}</div>

</div> 
    )
}

export default Cards;