import React, { useState } from "react";
import Modal from "./Modal";

const Card = ({ book }) => {
  
    const [show, setShow] = useState(false)
    const [bookItem, setBookItem] = useState();
  return (
    <>
      {book.map((item, index) => {
        let thumbnail =
          item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

        if (thumbnail !== undefined) {
          return (
            <div className="card" onClick={()=>{setShow(true);setBookItem(item)}} key={index}>
              <img src={thumbnail} alt="" />
              <div className="bottom">
                <h3 className="title">{item.volumeInfo.title}</h3>
                <p className="amount">&#8358;9000</p>
              </div>
            </div>
            
          );
        }
        return null; // Add this line to handle the case where thumbnail is undefined
      })}
      <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
    </>
  );
};

export default Card;
