import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import ProductCard from './components/ProductCard';
import ShopAll from './components/ShopAll';
import style  from '../src/components/style.css';
import VerticalNavbarComponent from './components/VerticalNavbarComponent';
import VerticalNavbarComponent2 from './components/VerticalNavbarcomponent2';
import VerticalNavbarComponent3 from './components/VerticalNavbarComponent3';

const products = [
  { imgSrc: 'images/Vegan.jpeg', title: 'Shop All', link: '/shop-all' },
  { imgSrc: 'images/VeganPink.jpeg', title: 'Daily Plant Proteins', link: '/daily-plant-proteins' },
  { imgSrc: 'images/Biotin.jpeg', title: 'Specialty Nutrition', link: '/specialty-nutrition' },
  { imgSrc: 'images/newlaunches.jpeg', title: 'New Launches', link: '/new-launches' },
  { imgSrc: 'images/Go-fuel.jpeg', title: 'Kids\' Multi-Nutritional Drink', link: '/kids-multi-nutritional-drink' },
  { imgSrc: 'images/mojopops.jpeg', title: 'Mojo Pops Protein Chips', link: '/mojo-pops-protein-chips' },
  { imgSrc: 'images/Shaker.jpeg', title: 'Shakers', link: '/shakers' },
  // Add more products as needed
];

const detailedProducts = [
  { imgSrc: 'images/VeganCho.png', title: 'Daily Plant Protein- Chocolate Trial Pack', rating: 4, price: 29.99 },
  { imgSrc: 'images/VeganPink.jpeg', title: 'Daily Plant Protein - Multi flavour Pack', rating: 5, price: 19.99 },
  { imgSrc: 'images/VeganVan.png', title: 'Daily Plant Protein - Unflavoured (Jar)', rating: 2, price: 24.99 },
  { imgSrc: 'images/VeganJar.png', title: 'Specialty Nutrition', rating: 3, price: 44.99,  style: { visibility: 'hidden' } },
  { imgSrc: 'images/Biotin.png', title: 'Specialty Nutrition', rating: 1, price: 74.99, style: { visibility: 'hidden' } },
  { imgSrc: 'images/VeganJar.png', title: 'Daily Plant Protein - Chocolate (Jar)', rating: 3, price: 14.99 },
  { imgSrc: 'images/VeganVan.png', title: 'Daily Plant Protein - Vanilla (Jar)', rating: 3, price: 84.99 },
  { imgSrc: 'images/VeganCof.png', title: 'Daily Plant Protein - Coffee Caramel (Jar)', rating: 3, price: 24.99 },
  { imgSrc: 'images/VeganStr.png', title: 'Daily Plant Protein - Strawberry (Jar)', rating: 3, price: 24.99 },
  { imgSrc: 'images/VeganMan.png', title: 'Daily Plant Protein Powder - Mango Mania (Jar)', rating: 4, price: 44.99 },
  { imgSrc: 'images/VeganCoffPac.png', title: 'Daily Plant Protein - Chocolate', rating: 5, price: 64.99 },
  { imgSrc: 'images/VeganUnf2.png', title: 'Daily Plant Protein - Unflavoured', rating: 4., price: 74.99 },
  { imgSrc: 'images/Biotin.jpeg', title: 'Specialty Nutrition', rating: 5, price: 26.99, style: {width:'432px', height:'123px'}},
  { imgSrc: 'images/VeganJar.png', title: 'Specialty Nutrition', rating: 2, price: 54.99 },
  { imgSrc: 'images/VeganMan.png', title: 'Specialty Nutrition', rating: 4, price: 34.99 },


  // Add more detailed products as needed
];
const verticalNavStyle = {
  backgroundColor: 'rgb(240, 212, 235)',
  width: '20%',
};
const contentStyle = {
  marginLeft: '20%',
  width: '80%',
};

const App = () => {
  return (
    <div>
      <NavbarComponent  />
        <div className="container mt-4" style={{ paddingTop: '70px'}} >
        <div className="d-flex flex-wrap justify-content-center mt-4 w-500">
          {products.map((product, index) => (
            <ProductCard key={index} imgSrc={product.imgSrc} title={product.title} link={product.link}  />
          ))}
        </div>
        <h2 style={{ backgroundColor: 'rgb(235, 208, 187)'}}>ShopAll</h2>

        <div className="d-flex flex-wrap justify-content-center mt-4">
          {detailedProducts.map((product, index) => (
            <ShopAll 
              key={index} 
              imgSrc={product.imgSrc} 
              title={product.title} 
              rating={product.rating}  
              price={product.price} 
              style={product.style} 

            />
          ))}
        </div>
      </div>
      <div className='HappyNutrition'>#ProteinIsForEveryone #HappyNutrition<br/></div>
<span className='Follow'>Follow us @originprotein</span>
<VerticalNavbarComponent style={verticalNavStyle} />
<div className='vertical-line'></div>
<VerticalNavbarComponent2/>
<div className='vertical-line2'></div>
<VerticalNavbarComponent3/>
    </div>
  );
};

export default App;
