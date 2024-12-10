import React from 'react'

const Cards = () => {
    return (
        <div className='mx-5 mt-5' >
            <h1 className='text-2xl'>Recommended For You..!</h1>
            <div className=''>
                <CardsImg />
            </div>
        </div>
    )
}

export default Cards

const CardsImg = () => {
    const movieCollection = [
        "https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/139693/optimized_product_thumb_stage.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROwr_TVxxmTm0NFbs7J_EEVmsGksUqVIPos3at-z_q9-ZTJCjD_0Hy9cjMRObLRhKNQ-o&usqp=CAU",
        "https://i.ytimg.com/vi/uLgFBG5P5K0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBsZxCC2VMOhtP6Bcz6zbYrMpPKWA",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEB8lyW4bWH61zrJIcDslv4gc5JfZhhVSwTA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCCsQ_xvNUd7WPUplZj_KN3-5expYr_xKFcQ&s",
        "https://c4.wallpaperflare.com/wallpaper/948/780/16/cyborg-x-hollywood-movie-poster-wallpaper-preview.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9k5_YcT2aNJUFF0QNeIBTAMxAjWFDrreb_Q&s",
        "https://i.ytimg.com/vi/dKFCrdOYRSE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC6o9FulPaRZJhOqcnMkPnDIQFqEw",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX5ndCHAATiwmjdpZ6oP82dUami6g2e5KWDtjy77vB4p6M9A-WA_VVULkogg8UcGVCX8s&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvY9-vMHF6Qed3dyNJcf_AwF9rd9btSHXm9w&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVL1paIYBIW8kqnLuyuR1j8KqKX4nsa4PkHX2pSsky59PW1LekpAuQRbJLGJUbLZx95LI&usqp=CAU",
        "https://media.gettyimages.com/id/483862685/video/loopable-red-carpet-event.jpg?s=640x640&k=20&c=_kOqiwE_RW2-jpnhTl0nbtF76-DgJIifzEphnq_Qgtw=",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThp8SYs71FYgZfaCxAVZ2pkQymxLJCFJTybw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-tZcwJKP0gZo0oOAXFeapPbWDe8_gDqkXluJTxuuAck2XMSiMMD2YDUTSjnfr9wIz7tU&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbqCoZQJ51VJ4s_br2hFDLYw-SrxfSoLrg5w&s",
        "https://media.istockphoto.com/id/497388687/video/actress-on-red-carpet.jpg?s=640x640&k=20&c=0cJxTFRr2EkvDGZrCKV11gJf9ziaIzBQoErFVz1EIz8=",
        "https://media.istockphoto.com/id/496946953/video/actor-on-red-carpet.jpg?s=640x640&k=20&c=nMz2x96Zj1nCSW5-dFKdInbQBYp4RaaoyTdXSdx6TQI=",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxhDsCUhCGUXzSqK87Jku0qwCN1_axIRiLEQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLpHwNzDsyZ0p2K1I-W3j1dQkulD2qwuek4w&s",
        "https://images.filmibeat.com/img/2024/07/ulajhposter1-1720617883.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLa9LWUeSdKuzLUARP7HxcLK9IliUgVuejrQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzbHls8H4LwRe5gCLFcyWqF7iHsRVoZDrLmQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO5wlylfGo4rSsenSZiCZUoem3xWihP52XNQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ41gyVr5cB-8oqWXFprTiNRJJPQVpezJH0vQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrv3yYEdBDNVuhPW50-J6CgflzfNSRwsw4sA&s",
    ];
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {movieCollection.map((image, index) => (
                <div
                    key={index}
                    className="rounded-lg "
                >
                    <img
                        src={image}
                        alt={`Image ${index + 1}`}
                        className=" h-auto rounded-lg w-[430px]"
                    />
                </div>
            ))}
        </div>
    )
}