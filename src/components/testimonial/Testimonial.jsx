/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                {/* main  */}
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading  */}
                    <h1 className=' text-center text-3xl font-bold text-black' >Elite Clients Testimonial</h1>
                    {/* para  */}
                    <h2 className=' text-center text-2xl font-semibold mb-10' >What our top <span className=' text-blue-500'>customers</span> are saying</h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://imgs.search.brave.com/FoN_C3Uyx9CIIzOtcFVDj03XcQUhBo7MnUdaLbsj2tY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhiLzg0/LzA4LzhiODQwODk3/NzI2NDY2NDQ1ODBm/ZTkwZjhlM2RlYTk4/LmpwZw" />
                                <p className="leading-relaxed">"As an interior designer, I'm always on the lookout for appliances that not only perform well but also enhance the aesthetic appeal of a kitchen. The Gleam Kitchen Blender exceeded my expectations on both fronts. Its sleek design seamlessly fits into modern kitchen settings, while its powerful motor effortlessly blends even the toughest ingredients. I highly recommend this blender to anyone looking to elevate both their kitchen's functionality and style."</p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Emily Parker</h2>
                                <p className="text-gray-500">Interior Designer</p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://imgs.search.brave.com/jzW2VTMdll798-CLkTyF5_AXV69YqZV4v3Twe1XjqU0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jaGVmLWNvb2tp/bmdfMTAzNzE3MS0y/ODM4My5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw" />
                                <p className="leading-relaxed">"I've been in the culinary industry for over two decades, and I've used countless knife sets throughout my career. The MasterChef Knife Set is, without a doubt, one of the best I've ever come across. The blades are incredibly sharp and durable, making slicing and dicing a breeze. The ergonomic handles provide a comfortable grip, reducing fatigue during long hours in the kitchen. Whether you're a professional chef or a home cook, this knife set is a must-have for your kitchen arsenal."</p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">David Johnson</h2>
                                <p className="text-gray-500">Chef</p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://imgs.search.brave.com/6o0AD_dw0vmpyUTHuWOhc3bYocrunMJHp5QX4ZVgNa0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly92aXNh/Zm90by5jb20vaW1n/L3NvdXJjZTM1NXgz/ODhfaW4uanBn" />
                                <p className="leading-relaxed">"As a fashion designer specializing in traditional attire, I have a keen eye for quality fabrics and craftsmanship. The Elegance Silk Saree surpassed my expectations in every aspect. The silk fabric feels luxurious against the skin, and the intricate embroidery adds a touch of elegance to the attire. Whether it's a special occasion or a casual gathering, this saree effortlessly elevates any look. I'm delighted with my purchase and would highly recommend it to anyone looking for a timeless piece of Indian attire."</p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Sarah Patel</h2>
                                <p className="text-gray-500">Fashion Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial