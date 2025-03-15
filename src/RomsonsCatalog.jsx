import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFlask, FaCogs,FaPhone, FaShieldAlt, FaPhoneAlt ,FaIndustry,FaMapMarkerAlt, FaTrophy, FaEnvelope,FaMicroscope, FaUsers, FaHandHoldingHeart } from "react-icons/fa";
import { Helmet } from "react-helmet";



const RomsonsCatalog = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const companyInfo = {
    name: "SAPPHIRE SURGICAL SUPPLIERS",
    description:
      "sapphire surgical suppliers has been revolutionizing the medical device industry since 27 Dec 2002, pioneering disposable surgical devices and setting the gold standard in healthcare innovation.",
    backgroundImage: "https://www.romsons.com/cdn/shop/products/romsons-medical-background.jpg",
  };

  const categories = [
    {
      name: "Urology Care",
      products: [
        { name: "Nel Cath", img: "https://m.media-amazon.com/images/I/61WidBlWPJL.jpg" },
        { name: "Male Cath", img: "https://m.media-amazon.com/images/I/51X+Fzd7M3L._AC_UF1000,1000_QL80_.jpg" },
        { name: "Sil Cath", img: "https://www.tanpharm.com.au/productimages/UR010014.jpg" },
        { name: "Uro Cath", img: "https://5.imimg.com/data5/IM/YZ/JC/SELLER-19120879/uro-drainage-catheter.png" },
        { name: "Uro Bag", img: "https://cdn.medzell.net/assets/media/manufacturer/products/images/uri-bag-premium.jpeg" },
        { name: "Urometer", img: "https://m.media-amazon.com/images/I/31M6nJvRblL._AC_UF1000,1000_QL80_.jpg" },
        { name: "Supra Cath Plus", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKDb9rlQ7Kx6AZknt1V3RnNBUTSzX-Xz6PWw&s" },
      ],
    },
    {
      name: "Surgery Care",
      products: [
        { name: "Romo Vac Set", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbb_sqcIpUIqk-aF5xWTvnQ0lglRJLmzbo3A&s" },
        { name: "Flat Drain Set", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2vzLwoEricOdQ4Q3NRDAvQMy0130Y6d5AHg&s" },
        { name: "T.U.R SET", img: "https://html.romsons.net.in/domestic/products/images_product/tur_set.png" },
        { name: "Vaccu Suck Suction Set", img: "https://www.romsons.in/cdn/shop/products/51SZ7i4M6OL._SX522_800x.jpg?v=1737357784" },
      ],
    },
    {
      name: "Gastro Care",
      products: [
        { name: "Romolene", img: "https://www.polymedicure.com/wp-content/uploads/2019/05/Ryle-tube.jpg" },
        { name: "Gastrolene PUR", img: "https://5.imimg.com/data5/ZY/XD/PW/SELLER-11129807/romsons-gs-4024-gastrolene-pur.jpg" },
        { name: "Feedy", img: "https://m.media-amazon.com/images/I/51MeVaxAU0L._AC_UF1000,1000_QL80_.jpg" },
        { name: "Fee Bag", img: "https://5.imimg.com/data5/SELLER/Default/2021/1/KM/XE/RI/85430574/enteral-feeding-bag.jpg" },
        { name: "Colo Bag", img: "https://www.ostomy.org/wp-content/uploads/2022/03/2201UOA_0001d_labeled-transparency-397x450.png" },
      ],
    },
    {
      name: "Cardiac Care",
      products: [
        { name: "Silicone Flexo Cath", img: "https://www.colmed.in/pub/media/catalog/product/cache/9032ff7ba287d48c7a6aa389b5ca9462/s/i/silicon_flexo_cath.png" },
        { name: "Trocar Catheter", img: "https://www.jaypeescientific.com/image/cache/catalog/100121-500x500.jpg" },
        { name: "Respirometer", img: "https://m.media-amazon.com/images/I/61bGYUz9oOL._AC_UF350,350_QL50_.jpg" },
        { name: "Mistair", img: "https://5.imimg.com/data5/XZ/BL/SH/SELLER-13819495/mistair-gs-6022.jpg" },
      ],
    },
    {
      name: "Infusion & Transfusion",
      products: [
        { name: "I.V Infusion Kit", img: "https://www.romsons.in/cdn/shop/products/Intera-Kit_1080x.jpg?v=1737357778" },
        { name: "Blood Transfusion Set", img: "https://www.nulife.co.in/uploads/products/gallery/zoom/4a0a7aeb7def4cf18f5c4da8ba8a04c5-6EEB116E-6CB6-4BE0-8AEC-3D029BE4AE2C.jpg" },
        { name: "Steriflo", img: "https://www.reylenferna.com/wp-content/uploads/2018/07/UV50040-EQ-WAPU-DAVEY.jpg" },
        { name: "Microperf", img: "https://content.jdmagicbox.com/quickquotes/images_main/romsons-medical-and-surgical-consumables-29-01-2021-200-220056467-vsp4m.jpg" },
        { name: "Buretta", img: "https://5.imimg.com/data5/SELLER/Default/2021/12/HF/RT/QP/20483917/buretta-110-ml.jpg" },
      ],
    },
  ];


  return (
    <div className="min-h-screen bg-black text-white">
        <Helmet>
          <title>Sapphire Surgical Suppliers</title>
        </Helmet>
      <header
        className="h-[50vh] flex flex-col items-center justify-center text-white bg-red-800 bg-opacity-80 bg-cover bg-center text-center animate-fade-in"
        style={{ backgroundImage: `url(${companyInfo.backgroundImage})` }}
        data-aos="fade-down"
      >
        <h1 className="text-5xl font-extrabold drop-shadow-lg">{companyInfo.name}</h1>
        <p className="mt-3 text-xl max-w-2xl drop-shadow-md">{companyInfo.description}</p>
      </header>

      <section className="py-16 px-6 bg-gray-900 shadow-md" data-aos="fade-up">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-600 flex items-center justify-center gap-2"><FaShieldAlt /> About Us</h2>
          <p className="mt-4 text-lg text-gray-300">
          Founded in 2002, Sapphire has been at the forefront of revolutionizing the medical industry with innovative disposable surgical devices. With 23 years of expertise, we have built a strong sales network across North India, serving over 1000+ clients with precision and reliability.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-900" data-aos="fade-up">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-600 flex items-center justify-center gap-2"><FaUsers /> Our Mission</h2>
          <p className="mt-4 text-lg text-gray-300">
            Our mission is to anticipate healthcare needs, innovate tirelessly, and create products that ensure patient well-being and safety while maintaining the highest quality standards.
          </p>
        </div>
      </section>

      {categories.map((category, idx) => (
        <section key={idx} className="py-12 px-4 md:px-6 bg-gray-900 shadow-md" data-aos="fade-up">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-red-600">{category.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              {category.products.map((product, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 hover:shadow-red-600"
                  data-aos="flip-left"
                >
                  <img src={product.img} alt={product.name} className="w-full h-48 md:h-56 object-cover" />
                  <h3 className="text-lg md:text-xl font-semibold text-red-400 p-4">{product.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 px-6 bg-gray-900" data-aos="fade-up">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-600 flex items-center justify-center gap-2"><FaMicroscope /> Research & Development</h2>
          <p className="mt-4 text-lg text-gray-300">
          sapphire is committed to innovation, continuously improving medical solutions through advanced R&D, ensuring cutting-edge products for patient safety and healthcare efficiency.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-black" data-aos="fade-up">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-600 flex items-center justify-center gap-2"><FaTrophy /> Quality & Manufacturing</h2>
          <p className="mt-4 text-lg text-gray-300">
            We follow NIC- 2423 sterilization standards, and CE certification, ensuring that every product undergoes rigorous quality checks before reaching our customers.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-900" data-aos="fade-up">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-600 flex items-center justify-center gap-2"><FaHandHoldingHeart /> Commitment to Healthcare</h2>
          <p className="mt-4 text-lg text-gray-300">
            At sapphire, we believe in empowering healthcare professionals with high-quality, innovative, and safe medical devices, improving the lives of patients worldwide.
          </p>
        </div>
      </section>

      

      <footer className="py-6 bg-red-900 text-white text-center">
        <section className="py-16 px-6 bg-red-900" data-aos="fade-up">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white flex items-center justify-center gap-2"><FaPhoneAlt  /> Contact Us</h2>
          <p className="mt-4 text-lg text-gray-300 flex items-center justify-center gap-2"><FaMapMarkerAlt /> SAPPHIRE SURGICAL SUPPLIERS PRIVATE LIMITED 95/2 SHYAM COLONY, HISAR ROAD,ROHTAK, Haryana, India - 124001</p>
          <p className="mt-2 text-lg text-gray-300 flex items-center justify-center gap-2"><FaPhoneAlt  /> 01262-249009</p>
          <p className="mt-2 text-lg text-gray-300 flex items-center justify-center gap-2"><FaPhoneAlt  /> 9896664070</p>
          <p className="mt-2 text-lg text-gray-300 flex items-center justify-center gap-2"><FaEnvelope />sapphiresurgical99@gmail.com</p>
        </div>
        
      </section>

        <p className="text-lg">© 2002 SAPPHIRE SURGICAL SUPPLIERS. Leading the Future of Healthcare.</p>
      </footer>
    </div>
  );
};

export default RomsonsCatalog;
