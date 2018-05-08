import React from "react";
import ReactMorph from "react-morph";
import { Link, withRouter } from 'react-router-dom'
import DataApi from "../data/api";
import "./useroverlay.css"

const UserOverlay = (props) => {
  return (
    (props.location.pathname != "/") &&
    <div>
      <div class="paint">
        <img src="https://image.ibb.co/buNqrc/brush_stroke_banner_6.png" class="paint" />
        <div class="path-text">
          {props.location.pathname.search('user') > -1 || props.location.pathname.search('Welcome') > -1 ? '' : <Link to='/Welcome' style={{ textDecoration: 'none', color: 'white' }}>My Tasks </Link>
          }
          {props.location.pathname.replace(/[/\\*]/g, " / ")}
        </div>
      </div>
      <ReactMorph>
        {({ from, to, fadeIn, go }) => (
          <div style={{ height: "0px" }}>
            {DataApi.users.map((user_data, i) => {
              return (
                <div className="userOverlay circle radialHide" {...from("mycircle" + i) } style={{ top: 0 + 'px' }}>
                  <br />
                  <div className="userLabel">
                    My text.
                </div>
                </div>
              )
            })}
            <br />
            <div className="switchUserText switchUserTextHide" {...from("description") }>
              As this is a demo only, users are not password protected.
          </div>
            <a className="openMenuButton" {...from("button") } onClick={() => { go(1); Array.from(document.getElementsByClassName("userImg")).map(i => { i.classList.remove("selected"); return 0; }) }}>
              <img src="https://cdn.iconscout.com/public/images/icon/premium/png-512/pull-down-34ff5efaec8d63e9-512x512.png" style={{ width: "80px" }} />
            </a>
            <a className="switchUserTextHide">
              <strong {...from("title") }></strong>
            </a>

            {DataApi.users.map((user_data, i) => {
              return (
                <Link to={'/welcome/user/' + i} onClick={() => { go(0); document.getElementById('userImg' + i).classList.add("selected"); }}>
                  <div id={'userImg' + i} className="userImg userOverlay circle radialShow" {...to("mycircle" + i) } style={{
                    backgroundImage:
                    'url("' + user_data.img + '")',
                    top: i * 120 + 'px'
                  }} >
                    <div className="userLabel">
                      {user_data['name']}
                    </div>
                  </div>
                </Link>
              )
            })}
            <a className="switchUserButton switchUserTextHide" {...to("button") }>
            </a>
            <h1 {...to("title") }>Switch Users</h1>
            <br />
            <div className="switchUserText switchUserTextShow" {...to("description") }>
              As this is a demo only, users are not password protected.
            <br /><a onClick={() => go(0)}>
                Close ❌
            </a>
            </div>
          </div>
        )}
      </ReactMorph>
    </div>
  )
}

export default withRouter(UserOverlay)