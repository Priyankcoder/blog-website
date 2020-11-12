import React, {useContext} from "react";
import ReactMarkdown from "react-markdown";
import { AuthContext } from "../../Auth.js";
import { Link } from "react-router-dom";
import './Formatter.css'
const Formatter = ({match}) => {
    const key = match.params.key
    let {blogObjects} = useContext(AuthContext)
    let {title, firstName, lastName, content, timeStamp} = blogObjects[key]
    return (
      <div style={{ backgroundColor: "rgb(40, 48, 44)", width: "100vw", minHeight: "100vh", maxHeight: "fit-content", position: "absolute" }}>
        <div className="formatter-container">
          <Link to={"/"}>
            <i class="fas fa-home fa-3x back"></i>
          </Link>
          <ReactMarkdown className="f-title">{title}</ReactMarkdown>
          <div>
            <div className="card-prop">
              <p>{timeStamp}&nbsp;|</p>
              <p>
                &nbsp;{firstName} {lastName}
              </p>
            </div>
          </div>
          <ReactMarkdown className="f-content">
            {blogObjects[key].content}
          </ReactMarkdown>
        </div>
      </div>
    );
}

export default Formatter;