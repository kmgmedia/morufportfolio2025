        import React from "react";
        import { uiuxdesign, Brandidentity } from "../../assets";
        import "./projectcards.scss";



        // All this page styling is been done from  HERE
    // ANY CORRECTIONS ARE TO BE MADE FROM HERE AND ITS WILL CHANGE
    // ALL OTHER WEB PAGE DESIGNS TOO. BE CAREFUL.



        function Projectcards(props) {
        return (
        <div className="">
            <div className="projectcards-1">
            <h4>{props.title} </h4>
            </div>
            <div className="">
            <div className="projectcards-0">
                <p className="babyp">{props.body}</p>
            </div>
            </div>
        </div>
        );
        }

        export default Projectcards;