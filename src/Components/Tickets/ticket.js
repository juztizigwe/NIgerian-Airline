import React from 'react'

import { Helmet } from 'react-helmet'

import './ticket.css'

const Ticket = (props) => {
  return (
    <div className="ticket-container">
      <Helmet>
        <title>Ticket</title>
      </Helmet>
      <div className="ticket-ticket">
        <img
          src="/playground_assets/plane124499-ecii-1000w.png"
          alt="Plane124499"
          className="ticket-plane12"
        />
        <div className="ticket-cont">
          <img
            src="/playground_assets/rectangle34410-0oos-1000w.png"
            alt="Rectangle34410"
            className="ticket-rectangle3"
          />
          <img
            src="/playground_assets/plane168126-q36-1100w.png"
            alt="Plane168126"
            className="ticket-plane16"
          />
          <img
            src="/playground_assets/pngtransparentairplanecomputericonsaircrafticona5f8023-8o79-200h.png"
            alt="pngtransparentairplanecomputericonsaircrafticona5f8023"
            className="ticket-pngtransparentairplanecomputericonsaircrafticona5f"
          />
          <img
            src="/playground_assets/rectangle117822-4rii-200h.png"
            alt="Rectangle117822"
            className="ticket-rectangle11"
          />
          <div className="ticket-frame40256">
            <div className="ticket-frame40252">
              <span className="ticket-text">
                <span>Name</span>
              </span>
              <span className="ticket-text02">
                <span>John Doe</span>
              </span>
            </div>
            <div className="ticket-frame40253">
              <span className="ticket-text04">
                <span>Flight</span>
              </span>
              <span className="ticket-text06">
                <span>NA 12</span>
              </span>
            </div>
            <div className="ticket-frame40254">
              <span className="ticket-text08">
                <span>Seat</span>
              </span>
              <span className="ticket-text10">
                <span>12B</span>
              </span>
            </div>
            <div className="ticket-frame40255">
              <span className="ticket-text12">
                <span>Departure</span>
              </span>
              <span className="ticket-text14">
                <span>
                  <span>
                    May 27
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    11:35 AM
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </div>
          </div>
          <div className="ticket-frame40257">
            <span className="ticket-text19">
              <span>ABJ</span>
            </span>
            <img
              src="/playground_assets/planeicon18022-38oq-200h.png"
              alt="PlaneIcon18022"
              className="ticket-plane-icon1"
            />
            <span className="ticket-text21">
              <span>LAG</span>
            </span>
          </div>
          <div className="ticket-frame40258">
            <span className="ticket-text23">
              <span>ABJ</span>
            </span>
            <span className="ticket-text25">
              <span>LAG</span>
            </span>
          </div>
          <div className="ticket-frame40259">
            <div className="ticket-frame402521">
              <span className="ticket-text27">
                <span>Name</span>
              </span>
              <span className="ticket-text29">
                <span>John Doe</span>
              </span>
            </div>
            <div className="ticket-frame402531">
              <span className="ticket-text31">
                <span>Flight</span>
              </span>
              <span className="ticket-text33">
                <span>NA 12</span>
              </span>
            </div>
            <div className="ticket-frame402541">
              <span className="ticket-text35">
                <span>Seat</span>
              </span>
              <span className="ticket-text37">
                <span>12B</span>
              </span>
            </div>
            <div className="ticket-frame402551">
              <span className="ticket-text39">
                <span>Departure</span>
              </span>
              <span className="ticket-text41">
                <span>
                  <span>
                    May 27
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    11:35 AM
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </div>
          </div>
          <img
            src="/playground_assets/logo28024-h64-200h.png"
            alt="Logo28024"
            className="ticket-logo2"
          />
          <img
            src="/playground_assets/line37822-hbubg.svg"
            alt="Line37822"
            className="ticket-line3"
          />
        </div>
        <img
          src="/playground_assets/plane24416-ytlc-300h.png"
          alt="Plane24416"
          className="ticket-plane2"
        />
      </div>
    </div>
  )
}

export default Ticket
