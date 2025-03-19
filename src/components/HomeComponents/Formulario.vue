<script setup>
import MorInformation from '../Ui/MorInformation.vue';
</script>

<template>
    <section class="bg-[#F2F9FF] lg:relative lg:h-225">
        <div class="w-full h-60 lg:h-50 bg-white">Maps Here</div>
        <div class="flex flex-col lg:flex-row h-auto lg:py-20 lg:absolute lg:top-3 lg:items-center lg:gap-10">
            
            <form class="w-full lg:w-1/2 bg-[#004D40] lg:ml-20 text-[#F2F9FF]">
                <div class="p-10">
                    <h2 class="text-5xl font-poppins font-bold">Get in touch</h2>
                    <p class="text-xl font-extralight tracking-wide leading-5">Let's Create something <br> extraordinary together.</p>
                </div>
                
                <div class="px-10 py-3 flex flex-col gap-1">
                    <label for="name">Name <span>*</span>
                    </label>
                    <input type="text" placeholder="Set your name here" class="border-b-2 border-[#F2F9FF]">
                </div>
                
                <div class="px-10 py-3 flex flex-col gap-1">
                    <label for="email">Email address <span>*</span></label>
                    <input type="email" placeholder="Set your email address here" class="border-b-2 border-[#F2F9FF]">
                </div>
                
                <div class="px-10 py-3 flex flex-col gap-1">
                    <label for="telephone">Phone Number <span>*</span></label>
                    <input type="telephone" placeholder="Set your phone number here" class="border-b-2 border-[#F2F9FF]">
                </div>
                
                <div class="px-10 py-3 flex flex-col gap-1">
                    <label for="massage">Message</label>
                    <textarea name="massage" id="" class="border-2 border-[#f2f9ff] h-35 rounded-md"></textarea>
                </div>
                
                <div class="px-10 py-3 flex flex-row justify-center items-center gap-2">
                    <input type="checkbox">
                    <label for="text" class="text-xs leading-4">I allow this website to store my submission so they can respond to my inquiry. <span>*</span></label>
                </div>
                
                <div class="px-10 py-3 ">
                    <button type="submit" class="bg-[#00A88D] w-full py-2 text-xl font-bold cursor-pointer">Submit</button>
                </div>
            </form>
            
            <div class="hidden lg:block">
                <MorInformation />
            </div>
        </div>
    </section>
</template>