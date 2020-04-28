import React from 'react';
import "../App.css";

const Intro = props => (
    <div className="col-md-6" style={StyleSheet.box450}>
        <h4 style={StyleSheet.greyText}>
            {props.content}
        </h4>
        <a href="#" className="btn buttonAction">
            Pelajari Detail Program
        </a>
    </div>
);

const styles = {
    box450: {
        height: '450px'
    },
    greyText: {
        color: '#808080'
    }
};

export default Intro;