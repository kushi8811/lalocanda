"use client";

import React from "react";

export default function Map() {
  return (
    <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.34355207799!2d11.246738576393664!3d43.76572687109706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a515455b23281%3A0x674ac36d603ea089!2sLa%20Locanda%20Dei%20pitti!5e0!3m2!1sen!2suk!4v1759066681374!5m2!1sen!2suk"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
