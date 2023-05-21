import React from 'react'

import { Helmet } from 'react-helmet'
import {  onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db } from '../../firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

import './admin-dashboaed.css'

const AdminDashboaed = (props) => {
  return (
    <div className="admin-dashboaed-container">
      <Helmet>
        <title>Admin Dashboard</title>
      </Helmet>
      <div className="admin-dashboaed-admin-dashboaed">
        <div className="admin-dashboaed-mainmenu">
          <div className="admin-dashboaed-menu">
            <div className="admin-dashboaed-logo">
              <div className="admin-dashboaed-logo1">
                <div className="admin-dashboaed-frame"></div>
              </div>
            </div>
            <div className="admin-dashboaed-menuitem">
              <div className="admin-dashboaed-menutop">
                <div className="admin-dashboaed-menu1">
                  <img
                    src="/playground_assets/menudashboardi935-e09d.svg"
                    alt="MenuDashboardI935"
                    className="admin-dashboaed-menu-dashboard"
                  />
                  <span className="admin-dashboaed-text ParagraphButtontext">
                    <span>Dashboard</span>
                  </span>
                  <img
                    src="/playground_assets/rectangle5i935-fo1s-200w.png"
                    alt="Rectangle5I935"
                    className="admin-dashboaed-rectangle5"
                  />
                </div>
                <div className="admin-dashboaed-menu2">
                  <img
                    src="/playground_assets/menucari935-sk9r.svg"
                    alt="MenuCarI935"
                    className="admin-dashboaed-menu-car"
                  />
                  <span className="admin-dashboaed-text02">
                    <span>Flight Attendants</span>
                  </span>
                </div>
                <div className="admin-dashboaed-menu3">
                  <div className="admin-dashboaed-menu-booking">
                    <div className="admin-dashboaed-group">
                      <img
                        src="/playground_assets/vectori935-o3z.svg"
                        alt="VectorI935"
                        className="admin-dashboaed-vector"
                      />
                      <img
                        src="/playground_assets/vectori935-ntd7.svg"
                        alt="VectorI935"
                        className="admin-dashboaed-vector1"
                      />
                    </div>
                  </div>
                  <span className="admin-dashboaed-text04 ParagraphBody">
                    <span>Bookings</span>
                  </span>
                </div>
                <div className="admin-dashboaed-menu4">
                  <img
                    src="/playground_assets/menubelli935-j87.svg"
                    alt="MenuBellI935"
                    className="admin-dashboaed-menu-bell"
                  />
                  <span className="admin-dashboaed-text06 ParagraphBody">
                    <span>Notifications</span>
                  </span>
                </div>
                <div className="admin-dashboaed-menu5">
                  <img
                    src="/playground_assets/menusettingsi935-u7o.svg"
                    alt="MenuSettingsI935"
                    className="admin-dashboaed-menu-settings"
                  />
                  <span className="admin-dashboaed-text08 ParagraphBody">
                    <span>Settings</span>
                  </span>
                </div>
              </div>
              <div className="admin-dashboaed-splitline">
                <img
                  src="/playground_assets/line29357-z8m.svg"
                  alt="Line29357"
                  className="admin-dashboaed-line2"
                />
              </div>
            </div>
          </div>
          <div className="admin-dashboaed-logout">
            <div className="admin-dashboaed-logout1">
              <div className="admin-dashboaed-frame39997">
                <img
                  src="/playground_assets/logout9359-lhe.svg"
                  alt="Logout9359"
                  className="admin-dashboaed-logout2"
                />
              </div>
              <span className="admin-dashboaed-text10 H4">
                <span>Logout</span>
              </span>
            </div>
          </div>
        </div>
        <div className="admin-dashboaed-car-availablity">
          <div className="admin-dashboaed-header">
            <span className="admin-dashboaed-text12 HeaderH4">
              <span>Flight Availablity</span>
            </span>
          </div>
          <div className="admin-dashboaed-input">
            <div className="admin-dashboaed-frame40166">
              <div className="">
                
                <input
                className='admin-dashboaed-input1'
                />
              </div>
              <div className="admin-dashboaed-input2">
                <div>
                  <span className="admin-dashboaed-text16 ParagraphBody">
                    <span>To Route</span>
                  </span>
                </div>
                <img
                  src="/playground_assets/chevrondown1723-qkhj.svg"
                  alt="chevrondown1723"
                  className="admin-dashboaed-chevrondown1"
                />
              </div>
              <div className="admin-dashboaed-datetime">
                <div className="admin-dashboaed-frame21 admin-dashboaed-frame21">
                  <div className="admin-dashboaed-input3">
                    <img
                      src="/playground_assets/calendarchecki936-a05k.svg"
                      alt="calendarcheckI936"
                      className="admin-dashboaed-calendarcheck"
                    />
                    <div className="admin-dashboaed-frame22">
                      <span className="admin-dashboaed-text18 ParagraphBody">
                        <span>Nov 20, 2022</span>
                      </span>
                    </div>
                  </div>
                  <div className="admin-dashboaed-input4">
                    <img
                      src="/playground_assets/clock2i936-odw5g.svg"
                      alt="Clock2I936"
                      className="admin-dashboaed-clock2"
                    />
                    <div className="admin-dashboaed-frame23">
                      <span className="admin-dashboaed-text20 ParagraphBody">
                        <span>10 AM</span>
                      </span>
                    </div>
                    <img
                      src="/playground_assets/chevrondowni936-0hfi.svg"
                      alt="chevrondownI936"
                      className="admin-dashboaed-chevrondown2"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="admin-dashboaed-frame40123">
              <span className="admin-dashboaed-text22">
                <span>Set</span>
              </span>
            </div>
          </div>
        </div>
        <div className="admin-dashboaed-live-flight-status">
          <div className="admin-dashboaed-live-car-status">
            <div className="admin-dashboaed-header1">
              <div className="admin-dashboaed-frame40248">
                <span className="admin-dashboaed-text24 HeaderH4">
                  <span> User Status</span>
                </span>
                <div className="admin-dashboaed-filter">
                  <img
                    src="/playground_assets/filteri936-gae.svg"
                    alt="FilterI936"
                    className="admin-dashboaed-filter1"
                  />
                  <div className="admin-dashboaed-frame40058">
                    <span className="admin-dashboaed-text26 ParagraphButtontext">
                      <span>Filter</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="admin-dashboaed-frame40191">
                <div className="admin-dashboaed-frame40190">
                  <div className="admin-dashboaed-frame40189">
                    <div className="admin-dashboaed-frame40188">
                      <span className="admin-dashboaed-text28">
                        <span>No.</span>
                      </span>
                      <span className="admin-dashboaed-text30 Paragraph">
                        <span>Plane</span>
                      </span>
                    </div>
                    <span className="admin-dashboaed-text32 Paragraph">
                      <span>User</span>
                    </span>
                  </div>
                  <span className="admin-dashboaed-text34 Paragraph">
                    <span>Status</span>
                  </span>
                </div>
                <span className="admin-dashboaed-text36 Paragraph">
                  <span>Payment</span>
                </span>
              </div>
            </div>
            <div className="admin-dashboaed-carlist">
              <div className="admin-dashboaed-item">
                <div className="admin-dashboaed-frame40181">
                  <div className="admin-dashboaed-frame40178">
                    <div className="admin-dashboaed-frame40177">
                      <div className="admin-dashboaed-frame40172">
                        <span className="admin-dashboaed-text38 ParagraphP5">
                          <span>01</span>
                        </span>
                        <div className="admin-dashboaed-frame39984">
                          <span className="admin-dashboaed-text40 HeaderH5">
                            <span>6465</span>
                          </span>
                        </div>
                      </div>
                      <div className="admin-dashboaed-frame39982">
                        <img
                          src="/playground_assets/ellipse79363-pdnq-200h.png"
                          alt="Ellipse79363"
                          className="admin-dashboaed-ellipse7"
                        />
                        <span className="admin-dashboaed-text42">
                          <span>Alex Noman</span>
                        </span>
                      </div>
                    </div>
                    <div className="admin-dashboaed-frame39985">
                      <div className="admin-dashboaed-completed">
                        <div className="admin-dashboaed-group1">
                          <img
                            src="/playground_assets/ellipse1i936-yod-200h.png"
                            alt="Ellipse1I936"
                            className="admin-dashboaed-ellipse1"
                          />
                          <img
                            src="/playground_assets/ellipse2i936-cvop-200h.png"
                            alt="Ellipse2I936"
                            className="admin-dashboaed-ellipse2"
                          />
                        </div>
                      </div>
                      <span className="admin-dashboaed-text44 ParagraphP4">
                        <span>Completed</span>
                      </span>
                    </div>
                  </div>
                  <span className="admin-dashboaed-text46 ParagraphP4">
                    <span>$ 35.44</span>
                  </span>
                </div>
                <div className="admin-dashboaed-frame39964">
                  <span className="admin-dashboaed-text48">
                    <span>Details</span>
                  </span>
                </div>
              </div>
              <div className="admin-dashboaed-item1">
                <div className="admin-dashboaed-frame40182">
                  <div className="admin-dashboaed-frame40179">
                    <div className="admin-dashboaed-frame40176">
                      <div className="admin-dashboaed-frame40173">
                        <span className="admin-dashboaed-text50 ParagraphP5">
                          <span>02</span>
                        </span>
                        <div className="admin-dashboaed-frame39987">
                          <span className="admin-dashboaed-text52 HeaderH5">
                            <span>5665</span>
                          </span>
                        </div>
                      </div>
                      <div className="admin-dashboaed-frame39989">
                        <img
                          src="/playground_assets/ellipse79365-706-200h.png"
                          alt="Ellipse79365"
                          className="admin-dashboaed-ellipse71"
                        />
                        <span className="admin-dashboaed-text54">
                          <span>Razib Rahman</span>
                        </span>
                      </div>
                    </div>
                    <div className="admin-dashboaed-frame39990">
                      <div className="admin-dashboaed-pending">
                        <div className="admin-dashboaed-group11">
                          <img
                            src="/playground_assets/ellipse1i936-emf-200h.png"
                            alt="Ellipse1I936"
                            className="admin-dashboaed-ellipse11"
                          />
                          <img
                            src="/playground_assets/ellipse2i936-yx7-200h.png"
                            alt="Ellipse2I936"
                            className="admin-dashboaed-ellipse21"
                          />
                        </div>
                      </div>
                      <span className="admin-dashboaed-text56 ParagraphP4">
                        <span>Pending</span>
                      </span>
                    </div>
                  </div>
                  <span className="admin-dashboaed-text58 ParagraphP4">
                    <span>$ 0.00</span>
                  </span>
                </div>
                <div className="admin-dashboaed-frame39988">
                  <span className="admin-dashboaed-text60">
                    <span>
                      Details
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </div>
              </div>
              <div className="admin-dashboaed-item2">
                <div className="admin-dashboaed-frame40183">
                  <div className="admin-dashboaed-frame40180">
                    <div className="admin-dashboaed-frame40175">
                      <div className="admin-dashboaed-frame40174">
                        <span className="admin-dashboaed-text62 ParagraphP5">
                          <span>03</span>
                        </span>
                        <div className="admin-dashboaed-frame39992">
                          <span className="admin-dashboaed-text64 HeaderH5">
                            <span>1755</span>
                          </span>
                        </div>
                      </div>
                      <div className="admin-dashboaed-frame39994">
                        <img
                          src="/playground_assets/ellipse79366-xqte-200h.png"
                          alt="Ellipse79366"
                          className="admin-dashboaed-ellipse72"
                        />
                        <span className="admin-dashboaed-text66">
                          <span>Luke Norton</span>
                        </span>
                      </div>
                    </div>
                    <div className="admin-dashboaed-frame39995">
                      <button className="admin-dashboaed-radiobutton">
                        <div className="admin-dashboaed-inroute">
                          <div className="admin-dashboaed-group12">
                            <img
                              src="/playground_assets/ellipse1i936-cffr-200h.png"
                              alt="Ellipse1I936"
                              className="admin-dashboaed-ellipse12"
                            />
                            <img
                              src="/playground_assets/ellipse2i936-4qbi-200h.png"
                              alt="Ellipse2I936"
                              className="admin-dashboaed-ellipse22"
                            />
                          </div>
                        </div>
                      </button>
                      <span className="admin-dashboaed-text68 ParagraphP4">
                        <span>In route</span>
                      </span>
                    </div>
                  </div>
                  <span className="admin-dashboaed-text70 ParagraphP4">
                    <span>$ 23.50</span>
                  </span>
                </div>
                <div className="admin-dashboaed-frame39993">
                  <span className="admin-dashboaed-text72">
                    <span>
                      Details
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <img
            src="/playground_assets/scrollbar9367-mr5d-200w.png"
            alt="Scrollbar9367"
            className="admin-dashboaed-scrollbar"
          />
        </div>
      </div>
    </div>
  )
}

export default AdminDashboaed
