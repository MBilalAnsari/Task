import React from 'react';

const Slides = () => {
    return (
        <div className="mx-5 mt-5">
            <h1 className="text-2xl">Trending..!</h1>
            <div className="w-full mt-3">
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
        <div className="grid  grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 w-[100%] ">
            {imageCollection.map((image, index) => (
                <div
                    key={index}
                    className=" rounded-lg  border border-[grey] w-full "
                >
                    <img
                        src={image}
                        alt={`Image ${index + 1}`}
                        className=" h-full rounded-lg w-auto"
                    />
                    <div>

                    </div>
                </div>
            ))}
        </div>
    );
};
