import React from 'react'
import { moveKnight, canMoveKnight } from './Game'

export default function Square({ black, children }) {
    const fill = black ? 'black' : 'white'
    const stroke = black ? 'white' : 'black'

    return (
        <div
            style={{
                backgroundColor: fill,
                color: stroke,
                width: '30px',
                height: '30px',
            }}
        >
            {children}
        </div>
    )
}