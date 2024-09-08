import Link from 'next/link';
import React, { useState } from 'react';
import { MdCelebration } from "react-icons/md";
function Alert() {
  const [closed, setClosed] = useState(false);

  const handleClose = () => {
    setClosed(true);
  };

  if (closed) {
    return null; // Don't render the alert if it's closed
  }

  return (
    <div className="alertx">
    <button className="close-button" onClick={handleClose}>
      &times; {/* Close symbol (X) */}
    </button>
    <h2>Exciting News: Our Container Arrives in Ghana on November 9th!</h2>
    <MdCelebration className="celebration-icon" />
    <p>
      We are thrilled to announce that on November 9th, our eagerly awaited
      container will be arriving in Ghana, packed with 22 tonnes of
      high-quality PVC. This shipment is a testament to our commitment to
      delivering top-notch products to our valued customers in Ghana and
      beyond.
    </p>
    <button className="action-button" ><Link href={`/features`}> Learn More</Link></button>
 
  </div>
  );
}

export default Alert;