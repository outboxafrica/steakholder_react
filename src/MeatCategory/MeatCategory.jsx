import React, { Component } from 'react'

import MeatItem from "../MeatItem/MeatItem";

import './MeatCategory.css'

export default class MeatCategory extends Component {
    render() {
        return (
            <div className="meat__category">
            <MeatItem />
            <MeatItem />
            <MeatItem />
            <MeatItem />
            <MeatItem />
            <MeatItem />
            <MeatItem />
            <MeatItem />
            </div>
             
        )
    }
}
