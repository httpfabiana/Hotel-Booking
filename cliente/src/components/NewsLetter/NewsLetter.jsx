import React from "react";
import { assets } from "../../assets/assets";

const NewsLetter = () => {
  return (
    <section class="flex flex-col items-center max-w-5xl lg:w-full rounded-2xl px-4 py-12 md:py-16
     mx-2 lg:mx-auto my-30 bg-gray-900 text-white">
    <div class="flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl md:text-[40px]">
       Stay Inspired
      </h1>
      <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-xl">
        Join thousands of users who are already creating amazing things, completely free to start.
      </p>
    </div>
     <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
        <input 
            type="email" 
            name="email"
            placeholder="Enter your email" 
            className="bg-white/10 px-4 py-2.5 border border-white/20 rounded outline-none max-w-66 w-full"
            required
        />
        <button class="shrink-0 mr-2 px-6 py-3 text-sm bg-black rounded-md active:scale-95 transition flex gap-3  duration-300 text-white">
           Subscribe now
           <img src={assets.arrowIcon} alt="" className="w-3.5 invert  group-hover:translate-x-1 transition-all"/>
        </button>
    </div>
     <p className="text-gray-500 mt-6 text-xs text-center">
        By subscribing, you agree to our Privacy Policy and consent to receive updates.
     </p>
</section>
  )
}

export default NewsLetter;