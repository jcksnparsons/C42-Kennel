import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animals.css"

export const AnimalSearch = () => {
    const { setTerms } = useContext(AnimalContext)

    return (
        <>
            Animal Search:
            <input type="text"
                className="input--wide"
                onKeyUp={
                    (keyEvent) => setTerms(keyEvent.target.value)
                }
                placeholder="Search for an animal... " />
        </>
    )
}