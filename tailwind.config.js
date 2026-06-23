/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand primary blue (headers, buttons, footer) sampled from designs
        brand: {
          DEFAULT: '#1273D4',
          50: '#EAF3FC',
          100: '#DAE9F7',
          200: '#C4DCF4',
          500: '#2F84D9',
          600: '#1273D4',
          700: '#0F62B4',
        },
        // Yellow CTA ("Iniciar sesion")
        gold: {
          DEFAULT: '#F2BA0D',
          hover: '#DBA70B',
        },
        ink: '#0D141C', // primary heading / near-black text
        muted: '#577C9F', // blue-gray placeholder / secondary text
        surface: {
          page: '#F2F2F2', // gray page background (login, visit details)
          soft: '#F7FAFC', // light-blue page / input background (pre-checkin)
        },
        line: '#E3E8EF', // subtle borders
        danger: '#F11919',
        success: '#1273D4',
      },
      fontFamily: {
        sans: ['Montserrat', 'Inter', 'system-ui', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['Montserrat', 'Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
        field: '10px',
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(16, 42, 67, 0.18)',
        soft: '0 6px 18px -8px rgba(16, 42, 67, 0.20)',
      },
      maxWidth: {
        content: '1120px',
      },
    },
  },
  plugins: [],
}
