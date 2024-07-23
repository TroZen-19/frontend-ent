import React, { useState } from 'react'
import axios from 'axios'
const Home = () => {

  const [name,setname]=useState();
  const [email ,setemail]=useState();
  const [mobile,setmobile]=useState();
  const [nearestoffice , setnearestoffice]=useState();
  const [interestedcountry,setinterestedcountry]=useState();
  const [upcomingintake,setupcomingintake]=useState();
  const [courseinterest,setcourseinterest]=useState();

  const registerClient=async(e)=>{

    e.preventDefault();
     
    const data={
        name,
        email,
        mobile,
        nearestoffice,
        interestedcountry,
        upcomingintake,
        courseinterest
    }
  console.log(data);               
    
  try {     
   const   config={
          headers:{
              "Content-Type" : "application/json"
          }
      }
      
      if(!name || !email || !mobile || !interestedcountry || !nearestoffice || !upcomingintake || !courseinterest){
          alert("please fill all fields");
          return;
      }else{
            
        const response = await axios.post("http://localhost:8000/register" , data, config);
        
        const emailData = {
            name,
            email,
            message: `You have a new registration from:
            
            Name: ${name}
            Email: ${email}
            Mobile: ${mobile}
            Interested Country: ${interestedcountry}
            Nearest Office: ${nearestoffice}
            Upcoming Intake: ${upcomingintake}
            Course Interest: ${courseinterest}`
        }

        await axios.post("http://localhost:8000/sendEmail", {name:name,email:email,message:"We will get to you soon !!"});
        alert("Registration successful and email sent!");
        

      }

      
  } catch (error) {
      alert(error)
  }

    




  }

    return (
        <div className="">

        {/* navigation bar  */}

        <nav class="flex items-center justify-between flex-wrap bg-green-600 via-purple-600 to-gray-300 p-3">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <span class="font-semibold text-xl tracking-tight">Bridge Internationl Educational Consultancy</span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="#services" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
       Services
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        
      </a>
      <a href="#contact" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Contact Us
      </a>
    </div>
    
  </div>
</nav>

      

   <section className="relative text-gray-700 body-font bg-gray-700">
    {/* Background Image Section */}
    <div
        className="w-full"
        style={{
            backgroundImage: `url(/images/bridge.jpg)`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            height: '60vh'  
        }}
    >
        {/* Empty div to ensure image coverage */}
    </div>

    {/* Content Section */}
    <div className="bg-gray-700 pt-32 pb-24">
    <div className="mx-auto text-center px-5">
        <h1 className="text-3xl sm:text-4xl mb-4 font-medium text-white">
            We Support Your Dreams at Bridge Education
        </h1>
        <p className="text-lg mb-8 leading-relaxed text-white">
            Bridge International Educational Consultancy offers a comprehensive range of services to support your educational journey. We provide expert test preparation for exams such as GMAT, GRE, IELTS, PTE, SAT, and TOEFL. Our team offers personalized guidance for studying abroad in destinations including the UK, Australia, USA, Canada, New Zealand, India, Japan, Europe, and more. 
            <br/><br/>
            In addition to admissions counseling, we assist with visa processing, financial aid guidance, and career planning. Our goal is to ensure a smooth and successful transition to your chosen study destination, helping you achieve academic and career excellence.
        </p>
    </div>
</div>

</section>

    {/* Content Section */}
    



        {/* details on contact partners */}

       
            <div className="grid max-h-full grid-cols-1 gap-2 p-12 bg-gray-700 justify-items-center md:grid-cols-3 sm:grid-cols-2">

                <div className="w-64 h-full p-4 text-white bg-blue-600 rounded-2xl">
                    <h1><i className="p-2 text-4xl text-white fa fa-user"></i></h1>
                    <h1 className='text-2xl'>
                        Review course
                    </h1>
                    <p>
                        check which course resonates with your interest
                    </p>
                </div>

                <div className="w-64 h-full p-4 text-white bg-red-500 rounded-2xl">
                    <h1><i className="p-2 text-4xl text-white far fa-comments"></i></h1>
                    <h1 className='text-2xl'>
                        Reach Us
                    </h1>
                    <p>Fill in the information for us to revert</p>
                </div>

                <div className="w-64 h-full p-4 text-white bg-green-600 rounded-2xl">
                    <h1><i className="p-2 text-4xl text-white fas fa-globe"></i></h1>
                    <h1 className='text-2xl'>
                        Rise with Us
                    </h1>
                    <p>Brige Educational Mentors</p>
                </div>

            </div>

      


        <div className="bg-gray-700 ">
            <div className="grid grid-cols-1 p-4 md:grid-cols-2 ">

                <div className="flex flex-col items-start ">
                    <h1 className="text-4xl font-bold text-gray-200">Global study <span className="">destinations</span></h1>
                    <p className="text-2xl font-bold text-gray-200">___________________________________________</p>
                </div>
            </div>

           {/* country images */}

            <div className="grid grid-cols-1 gap-4 p-4 text-black justify-items-center md:grid-cols-3">
                <div className="w-11/12 rounded-2xl ">
                    <img className=" rounded-2xl" src="./images/country.images/australia.jpg" alt=""/>
                    <h3 className="p-2 text-xl font-semibold text-white">Australia</h3>
                </div>
                <div className="w-11/12 ">
                    <img className="rounded-2xl" src="./images/country.images/canada.jpg" alt=""/>
                    <h3 className="p-2 text-xl font-semibold text-white">UK</h3>
                </div>
                <div className="w-11/12 ">
                    <img className="rounded-2xl" src="./images/country.images/germany.jpg" alt=""/>
                    <h3 className="p-2 text-xl font-semibold text-white">Canada</h3>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 p-4 justify-items-center md:grid-cols-3">
                <div className="w-11/12 rounded-xl">
                    <img className="rounded-2xl" src="./images/country.images/newzealand.jpg" alt=""/>
                    <h3 className="p-2 text-xl font-semibold text-white">Germany</h3>
                </div>
                <div className="w-11/12 ">
                    <img className="rounded-2xl" src="./images/country.images/uk.jpg" alt=""/>
                    <h3 className="p-2 text-xl font-semibold text-white">New Zealand</h3>
                </div>
                <div className="w-11/12 ">
                    <img className="rounded-2xl" src="./images/country.images/usa.jpg" alt=""/>
                    <h3 className="p-2 text-xl font-semibold text-white">USA</h3>
                </div>
            </div>

        </div>
       {/* registration form  */}

        <div className=" bg-gradient-to-br from-pink-400 via-red-400 to-cyan-500">

            <div className="" id="background-image" style={{backgroundImage:`url(./images/fm.jpeg)`,backgroundPosition:'center',backgroundSize:"cover"}}>
                <div className="grid w-full p-8 justify-items-start">
                    <form className="p-4 bg-green-600 border-2 border-green-900 rounded-2xl">
                        <h1 className="text-3xl font-semibold text-white ">Request <span>Information</span></h1>
                        <div className="p-4 font-semibold text-white rounded-2xl ">
                           
                            <input type="text" className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="name" onChange={(e)=>setname(e.target.value)} placeholder="name*"/>
                        </div>
                        <div className="p-4 font-semibold text-white rounded-2xl ">
                          
                            <input type="email" className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="email" onChange={(e)=>setemail(e.target.value)} placeholder="email*"/>
                        </div>
                        <div className="p-4 font-semibold text-white rounded-2xl ">
                         
                            <input type="text" className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="mobile" onChange={(e)=>setmobile(e.target.value)} placeholder="mobile*"/>
                        </div>



                        <div className="p-4">

                            <div className="pb-4">
                                <div className="font-semibold text-white rounded-2xl">
                                   
                                    <select onChange={e=>setnearestoffice(e.target.value)} className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="nearestoffice">

                                        <option>nearest office*</option>
                                        <option>Kathmandu</option>
                                        <option>Butwal</option>
                                        <option>Itahari</option>
                                        <option>Chitwan</option>
                                    </select>
                                </div>
                            </div>
                          

                                <div className="pb-4">
                                   
                                    <select onChange={e=>setinterestedcountry(e.target.value)} className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="country" >
                                        <option>Interest country*</option>
                                        <option>usa</option>
                                        <option>canada</option>
                                        <option>australia</option>
                                        <option>United Kingdom</option>
                                        <option>Others</option>
                                    </select>
                                </div>
                            
                        
                        
                            <div className="">

                                <div className="pb-4">
                                 
                                    <select onChange={e=>setupcomingintake(e.target.value)} className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="month">

                                        <option>select upcoming intake*</option>
                                        <option>January</option>
                                        <option>September</option>
                                        <option>February</option>
                                        <option>Others</option>
                                    </select>
                                </div>
                            </div>
                            <div className="pb-4">

                               
                                
                                    <select onChange={e=>setcourseinterest(e.target.value)} className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="course">
                                        <option>course interest in*</option>
                                        <option>Masters</option>
                                        <option>Bachelors</option>
                                        <option>PHD</option>
                                        <option>others</option>
                                    </select>
     
                            </div>
                        </div>
                      
                            <div className="">
                                <button onClick={registerClient} className="px-4 py-2 font-semibold text-white bg-green-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" >Register now</button>
                            </div>
                      
                    </form>
                </div>
            </div>

        </div>

       {/* boxex  */}
        <div className="bg-gray-700">
            <div className="">

                <div className="pt-4">
                    <h1 className="text-4xl font-bold text-gray-200">Test <span className="">preparation</span></h1>
                    <p className="text-2xl text-white">__________________________________</p>
                </div>

            </div>


            <div className="grid grid-cols-1 gap-4 p-12 justify-items-center md:grid-cols-3">
                <div className="grid items-center w-9/12 h-40 text-center bg-green-400 shadow-2xl justify-items-center rounded-2xl">
                    <h1 className="text-4xl">GMAT</h1>
                </div>
                <div className="grid items-center w-9/12 h-40 text-center bg-blue-500 justify-items-center rounded-2xl ">
                    <h1 className="text-4xl ">IELTS</h1>
                </div>
                <div className="grid items-center w-9/12 h-40 text-center bg-red-500 justify-items-center rounded-2xl">
                    <h1 className="text-4xl ">PTE</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 p-12 justify-items-center md:grid-cols-3">
                <div className="grid items-center w-9/12 h-40 text-center bg-green-400 justify-items-center rounded-2xl">
                    <h1 className="text-4xl">TOEFL</h1>
                </div>
                <div className="grid items-center w-9/12 h-40 text-center bg-blue-500 justify-items-center rounded-2xl ">
                    <h1 className="text-4xl ">SAT</h1>
                </div>
                <div className="grid items-center w-9/12 h-40 text-center bg-red-500 justify-items-center rounded-2xl">
                    <h1 className="text-4xl ">GRE</h1>
                </div>
            </div>

        </div>

        <div className="p-12 bg-gray-700" id='services'>
           

                <div className="p-4">
                    <h1 className="p-2 text-4xl font-bold text-gray-200">What we <span className="">offer</span></h1>
                    <p className="pb-4 text-white">__________________________________</p>
                </div>
              

            {/* proposal */}
            <div className="grid grid-cols-1 gap-4 text-white justify-items-center md:grid-cols-5">
                <div className="">
                    <img className="rounded-2xl" src="./images/11.png" alt=""/>
                    <h5 className="p-2 text-xl font-semibold text-white">Education counseling</h5>
                </div>
                <div className="">
                    <img className="rounded-2xl" src="./images/two.jpg" alt=""/>
                    <h5 className="p-2 text-xl font-semibold text-white">country information</h5>
                </div>
                <div className="">
                    <img className="rounded-2xl" src="./images/10.jpg" alt=""/>
                    <h5 className="p-2 text-xl font-semibold text-white">selection of course</h5>
                </div>
                <div className="">
                    <img className="rounded-2xl" src="./images/3.jpg" alt=""/>
                    <h5 className="p-2 text-xl font-semibold text-white">Admission </h5>
                </div>
                <div className="">
                    <img className="rounded-2xl" src="./images/five.jpg" alt=""/>
                    <h5 className="p-2 text-xl font-semibold text-white">financial estimation</h5>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 pt-4 justify-items-center md:grid-cols-5 ">
                <div className="">
                    <img className="rounded-2xl" src="./images/country.images/uk.jpg" alt=""/>
                    <h5 className="p-2 text-xl font-semibold text-white">visa services</h5>
                </div>
                <div className="">
                    <img className="rounded-2xl" src="./images/4.jpg" alt=""/>
                    <h5 className="p-2 text-xl font-semibold text-white">accomodation </h5>
                </div>
                <div className="">
                    <img className="rounded-2xl" src="./images/5.jpg" alt=""/>
                    <h5 className="p-2 text-xl font-semibold text-white">travel guidance</h5>
                </div>
                <div className="">
                    <img className="rounded-2xl" src="./images/country.images/australia.jpg" alt=""/>
                    <h5 className="p-2 text-xl font-semibold text-white">carrier abroad</h5>
                </div>
                <div className="">
                    <img className="rounded-2xl" src="./images/six.jpg" alt=""/>
                    <h5 className="p-2 text-xl font-semibold text-white">safety</h5>
                </div>
            </div>
        </div>


        <div className="p-4 bg-gray-700">
         

                <div className="">
                    <h1 className="p-2 text-4xl font-bold text-gray-200">Testimonials </h1>
                    <p className="pb-4 text-white ">__________________________________</p>
                </div>
             



            

           {/* country images  */}
            <div className="grid grid-cols-1 gap-6 p-12 md:grid-cols-2">
                <div className="p-8 bg-blue-100 rounded-2xl shadow-lg flex flex-col items-center text-center">
                    <p className="text-blue-700">
                        "Bridge International Educational Consultancy provided exceptional guidance and support throughout my journey. Their expertise in educational consultancy is unparalleled, and I highly recommend their services to anyone looking to study abroad or seek career counseling."
                    </p>
                    <div className="my-4 w-24 h-24 rounded-full overflow-hidden bg-gray-300">
                        {/* Replace src with the actual image source */}
                        <img src="./images/t6.jpg" alt="A. P. J. Abdul Kalam" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-blue-900 font-bold text-xl">Mrs Nima Oli</p>
                    </div>

                    <div className="p-8 bg-blue-100 rounded-2xl shadow-lg flex flex-col items-center text-center">
                        <p className="text-blue-700">
                        “Working with Bridge International was a game-changer for my study abroad plans. Their expert advice and thorough support helped me navigate through the complexities of studying overseas. I highly recommend their services for anyone seeking top-notch educational consultancy.”
                        </p>
                        <div className="my-4 w-24 h-24 rounded-full overflow-hidden bg-gray-300">
                            {/* Replace src with the actual image source */}
                            <img src="./images/t5.jpg" alt="A. P. J. Abdul Kalam" className="w-full h-full object-cover" />
                        </div>
                        <p className="text-blue-900 font-bold text-xl">Mr Rohan Parajuli</p>
                        </div>

                        <div className="p-8 bg-blue-100 rounded-2xl shadow-lg flex flex-col items-center text-center">
                        <p className="text-blue-700">
                        “Bridge International Educational Consultancy went above and beyond to assist me in my educational pursuits. Their commitment to excellence and comprehensive knowledge of the study abroad process made all the difference. I confidently recommend their services to anyone looking to further their education.”
                        </p>
                        <div className="my-4 w-24 h-24 rounded-full overflow-hidden bg-gray-300">
                            {/* Replace src with the actual image source */}
                            <img src="./images/t3.jpg" alt="A. P. J. Abdul Kalam" className="w-full h-full object-cover" />
                        </div>
                        <p className="text-blue-900 font-bold text-xl">Mr Niranjan Adhikari</p>
                        </div>

                        <div className="p-8 bg-blue-100 rounded-2xl shadow-lg flex flex-col items-center text-center">
                        <p className="text-blue-700">
                        “The team at Bridge International provided outstanding support and expertise in helping me choose the right educational path. Their dedication to my success was evident in every interaction. Thanks to them, I’m now studying at my dream institution.”
                        </p>
                        <div className="my-4 w-24 h-24 rounded-full overflow-hidden bg-gray-300">
                            {/* Replace src with the actual image source */}
                            <img src="./images/t4.jpg" alt="A. P. J. Abdul Kalam" className="w-full h-full object-cover" />
                        </div>
                        <p className="text-blue-900 font-bold text-xl">Mr Sushil Sapkota</p>
                        </div>

            </div>

        </div>
                
        
        <div className="p-8 bg-green-700">
            <div className="grid grid-cols-2 gap-2 justify-items-center md:grid-cols-4">
                <div className="p-4 text-white ">
                    <h2><i className="text-4xl fas fa-hotel"></i></h2>
                    <h3 className='pt-2 text-4xl'>50+</h3>
                    <h5 className='pt-2 text-xl font-semibold'>Institutions Partners</h5>
                </div>
                <div className="p-4 text-white ">
                    <h2><i class="fas fa-graduation-cap text-4xl"></i></h2>
                    <h3 className='pt-2 text-4xl'>1000+</h3>
                    <h5 className='pt-2 text-xl font-semibold'>Satisfied Students</h5>
                </div>
                <div className="p-4 text-white ">
                    <h2><i className="text-4xl fas fa-star"></i></h2>
                    <h3 className='pt-2 text-4xl'>7+</h3>
                    <h5 className='pt-2 text-xl font-semibold'>Years of service</h5>
                </div>
                <div className="p-4 text-white ">
                    <h2><i className="text-4xl far fa-building"></i></h2>
                    <h3 className='pt-2 text-4xl'>4</h3>
                    <h5 className='pt-2 text-xl font-semibold'>Offices in Nepal</h5>
                </div>

            </div>

        </div>
        
 
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2438534734733!2d85.31937297412813!3d27.709756225387572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198ad514ec17%3A0x6f68c82b6dac397a!2sBridge%20International%20Educational%20Consultancy%20-%20Kamaladi!5e0!3m2!1sen!2sin!4v1721720036152!5m2!1sen!2sin" style = {{width: '100vw'}} height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

             {/* footer  */}

            <div className="grid grid-cols-1 gap-2 bg-gray-700 justify-items-center md:grid-cols-2" id='contact'>
                <div className="p-4">
                    <h4 className="pb-1 font-semibold text-gray-200">Explore Countries</h4>
                    <p className='text-gray-400'>Study in USA | Study in Canada | Study in Australia | Study in UK | Study in New Zealand | Study
                        in Ireland | Study in Germany | Study in Singapore | Study in Switzerland | Study in Malaysia |
                        Study in Dubai | Explore All Countries</p>
                    <h4 className="pt-1 pb-1 font-semibold text-gray-200">Exams</h4>
                    <p className='text-gray-400'>GMAT | GRE | IELTS | PTE | SAT | TOEFL</p>
                    <h4 className="pt-1 pb-1 font-semibold text-gray-200">Financial assistance</h4>
                    <p className='text-gray-400'>Scholarships for Germany | Scholarships for New Zealand | Scholarships for Australia |
                        Scholarships for UK</p>
                </div>

                <div className="p-4 text-white">
                    <h1 className='text-3xl'>Bridge Education</h1>
                    <p className="text-2xl text-blue-700">___________________________</p>
                    <p className='p-8'>
                    Bridge International Educational Consultancy provides test preparation and abroad study services for study in UK, Australia, USA, Canada, New Zealand, India, Japan, Europe and others.
                    <br/>
                    <address>kamaladi-kathmandu-Nepal
                    </address>
                    <br/>
                    bicm.nepal@gmail.com
                    <br/>
                    01-4544703 9851175571
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-2 p-3 bg-green-700 justify-items-center md:grid-cols-2">
                <div className="p-3 font-semibold text-white">
                    <p>&copy; 2024 BRIDGE INTERNATIONAL EDUCATIONAL CONSULTANCY. ALL RIGHTS RESERVED.</p>

                </div>
                <div className="">
                    <p className="p-3">
                        <a href="https://www.facebook.com/BridgeIEd/"><i className="pr-4 text-2xl text-white fab fa-facebook"></i></a>
                        <a href="https://www.instagram.com/bridgeinternational/"><i className="pr-4 text-2xl text-white fab fa-instagram"></i></a>
                        <a href="#"><i className="pr-4 text-2xl text-white fab fa-youtube"></i></a>
                        <a href="#"><i className="pr-4 text-2xl text-white fab fa-linkedin"></i></a>
                    </p>

                </div>

            </div>

    


         {/* container end  */}

    </div>
    )
}

export default Home