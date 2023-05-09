

const About = (props) => {

    return (

        <div className="about">

        <h1>About</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor quasi dolorum laudantium atque exercitationem, non id tempore. Voluptatum ratione similique nostrum nulla ea quas a accusantium facilis repudiandae aperiam id cupiditate dicta, sint in ullam, iste esse. Voluptates officiis, in nobis sequi fugit temporibus consectetur reprehenderit, alias possimus iure dolores!</p>
                {props.children}


        </div>
    )
}
export default About;