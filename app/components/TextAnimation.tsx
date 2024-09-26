"use client"

import { TypeAnimation } from "react-type-animation";

import React from 'react'

export const TextAnimation = () => {
  return (
    <TypeAnimation
    sequence={[
      "Front Dev",
      1500,
      "Web Engineer",
      1500,
    ]}
    wrapper="span"
    speed={20}
    repeat={Infinity}
  />
  )
}

// learn more about typeanimation