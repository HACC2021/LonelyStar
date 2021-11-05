import React, { useEffect, useState } from 'react';

const DogPicture = () => {
//   const [imageUrl, setImageUrl] = useState('');

//   useEffect(() => {
//     fetch('https://dog.ceo/api/breeds/image/random')
//       .then((res) => res.json())
//       .then((data) => {
//         setImageUrl(data.message);
//       });
//   }, []);

  return (
    <div>
      <img src={'https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074_960_720.jpg'} alt='a dog' />
      {/* <h1>HIIII</h1> */}
    </div>
  );
};

export default DogPicture;