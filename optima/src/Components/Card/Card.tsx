import { useState } from "react";
//Card component for each calculator
export default function Card({
    title,
    subtitle,
    img,
    background
}: {
    title: string,
    subtitle: string,
    img: string,
    background: string,

}) {
    return (
        <div style={{ backgroundColor: background }}>
            <h1>{title}</h1>
            <img src={img} />
            <h3>{subtitle}</h3>

        </div>
    )
}