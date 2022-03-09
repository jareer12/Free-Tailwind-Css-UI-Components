<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/styles.css" />
    <link href="https://kit-pro.fontawesome.com/releases/latest/css/pro.min.css" media="all" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" referrerpolicy="no-referrer"></script>
    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.0.1/dist/alpine.js" defer></script>
    <title>iBot | #1 SMM Panel!</title>
</head>

<body class="bg-gray-100">
    <!-- ==== NAVBAR ==== -->
    <nav class="flex items-center bg-black p-2 lg:px-12 flex-wrap">
        <a href="#" class="mr-4 inline-flex items-center">
            <img class="w-20" src="/assets/iBot.svg" alt="" srcset="">
        </a>
        <button class="text-white inline-flex p-3 hover:bg-gray-900 rounded-full lg:hidden ml-auto hover:text-white outline-none nav-toggler" data-target="#navigation">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
        <div class="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" id="navigation">
            <div class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">

                <a href="/signin.html" class="hidden lg:inline-flex  lg:w-auto w-full px-3 lg:mx-2 text-white text-center font-medium">
                    <span>Sign In</span>
                </a>

                <a href="/signup.html" class="hidden lg:inline-flex  lg:w-auto w-full px-3 lg:mx-2 py-2 rounded items-center justify-center bg-blue-600 text-white text-center hover:bg-blue-700">
                    <i class="fas fa-user text-white mr-2"></i>
                    <span>Sign Up</span>
                </a>
            </div>
        </div>
    </nav>

    <!-- ==== MAIN ==== -->
    <main>
        <!-- ==== Header ==== -->
        <div class="px-4 pt-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div class="flex flex-col mb-16 sm:text-center sm:mb-0">
                    <a href="/" class="mb-6 sm:mx-auto">
                    </a>
                    <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 text-center">
                            <span class="relative inline-block">
                                <svg viewBox="0 0 52 24" fill="#0066cc" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                                    <defs>
                                        <pattern id="e77df901-b9d7-4b9b-822e-16b2d410795b" x="0" y="0" width=".135" height=".30">
                                            <circle cx="1" cy="1" r=".7"></circle>
                                        </pattern>
                                    </defs>
                                    <rect fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)" width="52" height="24"></rect>
                                </svg>
                            </span>
                            iBot
                        </h1>
                        <p class="text-xl text-gray-600 text-center">
                            iBot, Cheap Social Media Panel with an automated system that provides social media services.
                        </p>
                    </div>
                    <a href="/signin.html" class="py-2 px-6 font-medium text-lg tracking-wide text-white transition duration-200 rounded shadow bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none w-full text-center">
                        Get Started
                    </a>
                    <div class="inline-flex items-center justify-center">
                    </div>
                </div>
            </div>
        </div>
        <div class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div class="mx-auto mb-5 lg:max-w-xl sm:text-center flex flex-col justify-center">
                <p class="inline-block px-3 py-px mb-2 text-2xl text-center font-semibold">
                    Payment Options
                </p>
            </div>
            <div class="flex flex-wrap justify-evenly gap-3">
                <div class="flex flex-col items-center">
                    <img class="w-12 h-12 mb-2" src="/assets/SVG/btc.svg" alt="coin" />
                </div>
                <div class="flex flex-col items-center">
                    <img class="w-12 h-12 mb-2" src="/assets/SVG/eth.svg" alt="coin" />
                </div>
                <div class="flex flex-col items-center">
                    <img class="w-12 h-12 mb-2" src="/assets/SVG/doge.svg" alt="coin" />
                </div>
                <div class="flex flex-col items-center">
                    <img class="w-12 h-12 mb-2" src="/assets/SVG/trx.svg" alt="coin" />
                </div>
                <div class="flex flex-col items-center">
                    <img class="w-12 h-12 mb-2" src="/assets/SVG/ltc.svg" alt="coin" />
                </div>
                <div class="flex flex-col items-center">
                    <img class="w-12 h-12 mb-2" src="/assets/SVG/bnb.svg" alt="coin" />
                </div>

                <div class="flex flex-col items-center">
                    <img class="w-12 h-12 mb-2" src="/assets/SVG/sol.svg" alt="coin" />
                </div>
            </div>
        </div>

        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div class="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                <div class="p-8 bg-white border rounded shadow-sm">
                    <p class="mb-3 text-xs font-semibold tracking-wide uppercase">
                        <a href="/" class="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800" aria-label="Category">weekend</a>
                        <span class="text-gray-600">— 1 Feb 2020</span>
                    </p>
                    <a href="/" aria-label="Article" title="Jingle Bells" class="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400">Jingle Bells</a>
                    <p class="mb-5 text-gray-700">
                        Some pilots get picked and become television programs. Some don't, become nothing.
                    </p>
                    <div class="flex items-center">
                        <a href="/" aria-label="Author" title="Author" class="mr-3">
                            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="avatar" class="object-cover w-10 h-10 rounded-full shadow-sm" />
                        </a>
                        <div>
                            <a href="/" aria-label="Author" title="Author" class="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400">Vasile Melinte</a>
                            <p class="text-sm font-medium leading-4 text-gray-600">Author</p>
                        </div>
                    </div>
                </div>
                <div class="p-8 bg-white border rounded shadow-sm">
                    <p class="mb-3 text-xs font-semibold tracking-wide uppercase">
                        <a href="/" class="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800" aria-label="Category">holidays</a>
                        <span class="text-gray-600">— 15 Nov 2020</span>
                    </p>
                    <a href="/" aria-label="Article" title="Happy new Year" class="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400">Happy new Year</a>
                    <p class="mb-5 text-gray-700">
                        Pommy ipsum smeg head whizz morris dancers come hither, bugger codswallop gob. Taking the mick middle class bog.
                    </p>
                    <div class="flex items-center">
                        <a href="/" aria-label="Author" title="Author" class="mr-3">
                            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="avatar" class="object-cover w-10 h-10 rounded-full shadow-sm" />
                        </a>
                        <div>
                            <a href="/" aria-label="Author" title="Author" class="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400">John Doe</a>
                            <p class="text-sm font-medium leading-4 text-gray-600">Author</p>
                        </div>
                    </div>
                </div>
                <div class="p-8 bg-white border rounded shadow-sm">
                    <p class="mb-3 text-xs font-semibold tracking-wide uppercase">
                        <a href="/" class="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800" aria-label="Category">programming</a>
                        <span class="text-gray-600">— 28 Dec 2020</span>
                    </p>
                    <a href="/" aria-label="Article" title="Why i love C++" class="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400">Why i love C++</a>
                    <p class="mb-5 text-gray-700">
                        Sportacus andrew weatherall goose Refined gentlemen super mario des lynam alpha trion zap rowsdower.
                    </p>
                    <div class="flex items-center">
                        <a href="/" aria-label="Author" title="Author" class="mr-3">
                            <img src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" alt="avatar" class="object-cover w-10 h-10 rounded-full shadow-sm" />
                        </a>
                        <div>
                            <a href="/" aria-label="Author" title="Author" class="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400">Andrew Larkin</a>
                            <p class="text-sm font-medium leading-4 text-gray-600">Author</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div class="grid grid-cols-1 row-gap-8 md:grid-cols-2">

                <div class="text-center md:border-r md:mb-0 mb-4">
                    <h6 class="text-4xl font-bold">144K</h6>
                    <p class="text-sm font-medium tracking-widest text-gray-400 uppercase lg:text-base">
                        Orders
                    </p>
                </div>

                <div class="text-center">
                    <h6 class="text-4xl font-bold">48.3K</h6>
                    <p class="text-sm font-medium tracking-widest text-gray-400 uppercase lg:text-base">
                        Users
                    </p>
                </div>

            </div>
        </div>

    </main>
    <script src="app.js"></script>

</body>

</html>