import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			luxury: {
  				gold: 'hsl(var(--luxury-gold))',
  				champagne: 'hsl(var(--luxury-champagne))',
  				charcoal: 'hsl(var(--luxury-charcoal))',
  				cream: 'hsl(var(--luxury-cream))',
  				pearl: 'hsl(var(--luxury-pearl))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		fontFamily: {
  			apple: ['var(--font-apple)', '-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', 'Inter', 'system-ui', 'sans-serif'],
  			sans: ['var(--font-apple)', '-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', 'Inter', 'system-ui', 'sans-serif'],
  			serif: ['var(--font-apple)', '-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', 'Inter', 'system-ui', 'sans-serif']
  		},
  		fontSize: {
  			'hero': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
  			'display': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.022em' }]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		boxShadow: {
  			'luxury': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  			'elegant': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
  		},
  		backgroundImage: {
  			'gradient-luxury': 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--luxury-charcoal)) 100%)',
  			'gradient-gold': 'linear-gradient(135deg, hsl(var(--luxury-gold)) 0%, #DAA520 100%)',
  			'gradient-pearl': 'linear-gradient(135deg, hsl(var(--luxury-pearl)) 0%, hsl(var(--luxury-cream)) 100%)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			shimmer: {
  				'0%': { backgroundPosition: '-200px 0' },
  				'100%': { backgroundPosition: 'calc(200px + 100%) 0' }
  			},
  			'fade-in-up': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(30px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'fade-in-left': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateX(-30px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateX(0)'
  				}
  			},
  			'fade-in-right': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateX(30px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateX(0)'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'shimmer': 'shimmer 2s infinite',
  			'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
  			'fade-in-left': 'fade-in-left 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
  			'fade-in-right': 'fade-in-right 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
