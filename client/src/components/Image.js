import React from "react";

export default function Image({ image }) {
  return (
    <img src="{image.urls.thumb}" alt="single-photo" className="single-photo" />
  );
}
