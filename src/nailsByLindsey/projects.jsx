import React from "react";

function Project(){

    const videos = [
        'https://scontent.cdninstagram.com/v/t66.30100-16/121318810_1360672674857031_5291817056707570966_n.mp4?_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=SK-u0wTi09kAX_hYpUz&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfCtEE0zwEDvO9tTMVOOX2UqVXlS8MiDFRIPe1SxzW-8sg&oe=653F8531&_nc_sid=10d13b',
        'https://scontent.cdninstagram.com/v/t50.2886-16/10000000_299725899510037_3412379277894544282_n.mp4?_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=bzA5zlJdA5MAX-28Srm&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfCOct8P5fNC69FEuif8LItvZTG_ei7UiE0Cvn4yP6gZKA&oe=653F77CB&_nc_sid=10d13b'
        //links dont work go back and fix them 
    ]

    return(
        <React.Fragment>
            <div>nails below</div>
            {videos.map((video,index)=>(
                <div key={index} className="video-card">
                <video width='320' height='240' controls>
                <source src={video} type="video/mp4"/>
                </video>
            </div>
            ))}
            
        </React.Fragment>
    )
}

export default Project;