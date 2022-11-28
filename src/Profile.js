import React from 'react';
 
export default function Profile(props) {

    const cardStyle = { display: 'inline-block', padding: '20px', margin: '40px', borderRadius: '10px', boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)', backgroundColor: '#fff' };
    const linkStyle = {color: 'white', backgroundColor: '#ff2d46', padding: '10px 25px', borderRadius: '10px', textDecoration: 'none', 
    margin: '10px', display: 'inline-block'};
    const ownerName = {fontSize: '1.5rem', color: '#000', display: 'block', margin: '0 40px', textTransform: 'capitalize'};
    console.log(props.owner);
    return (

        <>
        <div className='p-8'>
            <div style={cardStyle} className='style flex items-center flex-col'>
                <h2 style={ownerName}> {props.owner.login} </h2>
                <h2 style={{ padding: "10px"}}>{props.description} </h2>
                <a style={linkStyle} hreF={props.owner.html_url}> Repos URL </a>
                <img style={{ padding: "10px"}} alt="" src={props.owner.avatar_url} />
                
            </div>
        </div>
        </>
    )
      
}