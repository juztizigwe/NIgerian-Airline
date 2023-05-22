import React, { useEffect, useState } from "react";
import "./admin-dashboaed.css"


const Book = ({planeNumber, displayName, seat, departureTime}) => {
 
  return (
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
                              <span>{planeNumber}</span>
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
                            <span> {displayName} </span>
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
                          <span>{seat}</span>
                        </span>
                      </div>
                    </div>
                    <span className="admin-dashboaed-text46 ParagraphP4">
                      <span>{departureTime}</span>
                    </span>
                  </div>
                  <div className="admin-dashboaed-frame39964">
                    <span className="admin-dashboaed-text48">
                      <span>Details</span>
                    </span>
                  </div>
                </div>
             
              
              </div>
   
  );
  
};

export default Book;



