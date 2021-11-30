import React from 'react';
import ImageItem from './components/ImageItem'

const eventData = [
  {
    heading: "Theme",
    imageSrc: "https://images.unsplash.com/photo-1636116461481-4c3ec444c9f8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=simon-berger-b3tNFAkjdzw-unsplash.jpg",
    imageAlt: "A little image",
    imageWidth: "700px",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    date: "2021-12-21"

  },
  {
    heading: "Theme 1",
    imageSrc: "https://images.unsplash.com/photo-1637919649104-c292cbbbd97b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=rob-wicks-wmTmWDuvQUg-unsplash.jpg",
    imageAlt: "A little image",
    imageWidth: "700px",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    date: "2021-12-16"

  },
  {
    heading: "Theme 2",
    imageSrc: "https://images.unsplash.com/photo-1637049081841-948a8205b05a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=simon-berger-tHJ5DI5ujAE-unsplash.jpg",
    imageAlt: "A little image",
    imageWidth: "700px",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    date: "2021-12-17"

  },
  {
    heading: "Theme 3",
    imageSrc: "https://images.unsplash.com/photo-1636116461481-4c3ec444c9f8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=simon-berger-b3tNFAkjdzw-unsplash.jpg",
    imageAlt: "A little image",
    imageWidth: "700px",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    date: "2021-12-18"

  },
  {
    heading: "Theme 4",
    imageSrc: "https://images.unsplash.com/photo-1638000705481-71cfe591308a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=cameron-voyce-7P7dD6hyvms-unsplash.jpg",
    imageAlt: "A little image",
    imageWidth: "700px",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    date: "2021-12-14"

  },
  {
    heading: "Theme 5",
    imageSrc: "https://images.unsplash.com/photo-1638176820495-52a7c2ad8505?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=adrian-n-0OHyXKW56No-unsplash.jpg",
    imageAlt: "A little image",
    imageWidth: "700px",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    date: "2021-12-13"

  },
  {
    heading: "Theme 6",
    imageSrc: "https://images.unsplash.com/photo-1638153867870-daadae81acb5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=universal-eye-XiJax1s4S-g-unsplash.jpg",
    imageAlt: "A little image",
    imageWidth: "700px",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    date: "2021-12-16"

  }

]
function App() {
  return (
    <div>
      {
        eventData.map((event, index) => {
          return <ImageItem 
            key={index} 
            {...event} 
          />;
        })
      }
    </div>
  );
}

export default App;
