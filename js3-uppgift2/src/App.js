import React from 'react';
import ArticleItem from './components/ArticleItem';

const articleData = [
  {
    src: "https://images.unsplash.com/photo-1636116461481-4c3ec444c9f8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=simon-berger-b3tNFAkjdzw-unsplash.jpg",
    alt: "Mountains", 
    width: "700px",
    heading: "Mountains in the winter",
    text: "Lorem ipsum dolor sit am"
  },
  {
    src: "https://images.unsplash.com/photo-1637049081841-948a8205b05a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=simon-berger-tHJ5DI5ujAE-unsplash.jpg",
    alt: "A forest", 
    width: "700px",
    heading: "The forest in the winter",
    text: "Lorem ipsum dolor sit am"
  },
  {
    src: "https://images.unsplash.com/photo-1637919649104-c292cbbbd97b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=rob-wicks-wmTmWDuvQUg-unsplash.jpg",
    alt: "Stones", 
    width: "700px",
    heading: "Stone tower",
    text: "Lorem ipsum dolor sit am"
  }
]

function App() {
  return (
    <div>
      {
        articleData.map((image, i) =>{
          return <ArticleItem 
            key={i}
            src={image.src}
            alt={image.alt}
            width={image.width}
            heading={image.heading}
            text={image.text}
          />
        })
      }
    </div>
  );
}

export default App;
