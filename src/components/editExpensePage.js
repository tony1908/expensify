import React from 'react';

const HelpPage = props => {
    console.log(props)
    return (
        <div>
            Editing {props.match.params.id}
        </div>
    )
}

export default HelpPage;