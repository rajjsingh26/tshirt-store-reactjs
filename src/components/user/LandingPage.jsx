import React from 'react'
import Logo from '../Logo'

function LandingPage() {

  const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 2,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 3,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 4,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 5,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 6,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 7,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 8,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
  ]

  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
        <main className="w-full max-w-8xl mx-auto py-12">
          <section className="text-center mt-6">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Welcome to CosmicThreads</h2>
            <p className="text-lg text-gray-600 mb-8">Discover our exclusive collection of Basci stylish and comfortable t-shirts.</p>
          </section>

          <section className="mt-11 flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12 ml-48">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Quality You Can Trust</h3>
              <p className="text-lg text-gray-600 mb-4">
                At CosmicThreads, we pride ourselves on the quality of our products. Each t-shirt is crafted with the finest materials to ensure comfort, durability, and style. Our meticulous attention to detail means you get a product that not only looks great but also feels amazing to wear.
              </p>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h3>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2024, CosmicThreads started with a simple idea: to create unique and high-quality t-shirts that people love to wear. Our journey began with a small team of passionate designers and has since grown into a beloved brand known for its innovative designs and commitment to excellence.
              </p>
            </div>
            <div className="md:w-96 flex justify-center">
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Stylish T-Shirt" className="w-full h-96 object-cover rounded-lg shadow-md" />
            </div>
          </section>

          <section className="mt-12 text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Us?</h3>
            <p className="text-lg text-gray-600 mb-8">Our t-shirts are made from the finest materials, offering both style and comfort. Join thousands of satisfied customers and elevate your wardrobe with CosmicThreads.</p>
            <a href="/" className="bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-indigo-500 transition duration-300">Browse Collection Below</a>
          </section>
        </main>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                  <button href="/" className="bg-black text-white px-3 py-1 text-lg font-semibold h-auto rounded-lg">Buy</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage