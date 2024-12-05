import React from 'react';
import { Link } from 'react-router-dom';
import { TestTube, Sprout, ShoppingBag, FileText } from 'lucide-react';
import aboutus from '../../Assets/aboutus1.jpg'
import testImage from '../../Assets/testImage.jpg'

export default function HomePage() {
  
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[500px] -mt-18 mb-16 ml-20 mr-20">
        <div className="absolute inset-0" style={{boxShadow:"0px 0px 10px grey"}}>
          <img style={{overflow:"hidden",zIndex:"-1",borderRadius:"20px"}}
            src="https://media.gettyimages.com/id/1451084434/photo/male-farmer-and-agronomist-using-digital-tablet-while-standing-in-corn-field-against-sky.jpg?s=612x612&w=0&k=20&c=VvPFPbmmQEfeM7xPrSBsC-EgS0vtOLbiIZZS8Ai1eRg="
            alt="Farmer in field"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Optimize Your Soil Health
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Professional soil testing and expert recommendations for better crop yield
            </p>
            <Link
              to="/request-test"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold inline-flex items-center gap-2 transition-colors"
            >
              <TestTube className="w-5 h-5" />
              Request Soil Test
            </Link>
          </div>
        </div>
      </section>
      {/* /////////////// */}
      {/* about us section */}
      <section className="bg-gray-100 py-16 px-4 rounded-xl ml-20 mr-20" style={{backgroundColor:"#95ccb2"}}>
        <h2 className="text-3xl font-bold text-center mb-5">About</h2>
        <div className="" style={{display:'grid',gridTemplateColumns:"1fr 1fr",gap:"50px"}}>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> */}
            <div className="relative" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <img
              style={{height:"80%",width:"60%"}}
                src={aboutus}
                alt="Soil testing process"
                className="shadow-lg rounded-full"
              />
            </div>
            <div className="space-y-6" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",padding:"50px"}}>
              <div className="flex items-start gap-4 ">
               
                <div>
                  <h3 className="text-xl font-semibold mb-2">About Bhoomi Shakthi</h3>
                  <p className="text-gray-1000">
                  Bhoomi is dedicated to providing accurate soil testing and personalized product recommendations to enhance your agricultural practices. Our user-friendly platform offers comprehensive services, including soil test requests, crop advisory, and detailed soil preparation information.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our mission </h3>
                  <p className="text-gray-1000">
                  With a focus on sustainability and productivity, Bhoomi aims to support farmers in making informed decisions for optimal crop growth. Our expert advice and product recommendations ensure that your soil receives the care it deserves, leading to healthier and more fruitful harvests.
                  </p>
                </div>
              </div>
             
            </div>
          {/* </div> */}
        </div>
      </section>


      {/* Features Section */}
      <section className="py-16 ml-20 mr-20" style={{padding:"0"}}>
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TestTube className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Soil Testing</h3>
            <p className="text-gray-600">
              Comprehensive analysis of soil composition and nutrients
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sprout className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Expert Recommendations</h3>
            <p className="text-gray-600">
              Personalized advice for improving soil health
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Quality Products</h3>
            <p className="text-gray-600">
              Access to premium soil enhancement products
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-100 py-16 px-4 rounded-xl ml-20 mr-20">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <img style={{width:"100%",height:"100%"}}
                src={testImage}
                alt="Soil testing process"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Request a Test</h3>
                  <p className="text-gray-600">
                    Fill out our simple form to schedule a soil test at your location
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sample Collection</h3>
                  <p className="text-gray-600">
                    Our experts will collect soil samples from your field
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Get Results</h3>
                  <p className="text-gray-600">
                    Receive detailed analysis and personalized recommendations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="text-center py-16 ">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Join thousands of farmers who trust Bhoomi Shakthi for their soil analysis needs
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/signup"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold inline-flex items-center gap-2 transition-colors"
          >
            Create Account
          </Link>
          <Link
            to="/request-test"
            className="bg-white hover:bg-gray-100 text-green-600 border-2 border-green-600 px-8 py-3 rounded-lg text-lg font-semibold inline-flex items-center gap-2 transition-colors"
          >
            Request Test
          </Link>
        </div>
      </section>
    </div>
  );
}
