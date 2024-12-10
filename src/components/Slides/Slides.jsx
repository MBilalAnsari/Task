import React from 'react';

const Slides = () => {
    return (
        <div className="mx-5 mt-5">
            <h1 className="text-2xl">Trending..!</h1>
            <div className="flex gap-10 mt-5 ">
                <DynamicCard />
            </div>
        </div>
    );
};

export default Slides;

const DynamicCard = () => {
    const imageCollection = [
        "https://t4.ftcdn.net/jpg/05/74/44/19/360_F_574441923_vdiFNoyfPP5KJ1eCCERw1Aw9vIBL1apu.jpg",
        "https://i.pinimg.com/736x/25/a3/80/25a380a1939efa6f94d9d7b1ec623ee8.jpg",
        "https://i.pinimg.com/736x/04/35/b5/0435b5740ec9edcbe7dc003247495c72.jpg",
    ];

    return (
        <div className="flex gap-10 ">
            {imageCollection.map((image, index) => (
                <div
                    key={index}
                    className=" rounded-lg "
                >
                    <img
                        src={image}
                        alt={`Image ${index + 1}`}
                        className=" h-auto rounded-lg w-[430px]"
                    />
                </div>
            ))}
        </div>
    );
};
