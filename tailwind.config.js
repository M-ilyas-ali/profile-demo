/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens:{
        'xs':'480px',
        'sm':'640px',
        'md':'768px',
        'lg':'1024px',
        'xl':'1280px',
        '2xl':'1536px',
        

      },
      backgroundImage: {
       
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            'custom-image':"url('/side-dots.png')",
            'custom-image2':"url('/purple_romb1.png')",
            'custom-image3':"url('/purple_romb2.png')",
            'me':"url('/elyas.jpg')",
            'panaverse1':"url('/panaverse1.png')",
            'panaverse2':"url('/panaverse2.png')",
            'panaverse3':"url('/panaverse3.png')",
  
      
      },
    },
  },
  plugins: [],
}
