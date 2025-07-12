<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import { MoveUpRight } from '@lucide/svelte';
  
</script>

<!-- Navigation Bar -->
<nav class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<!-- Logo -->
			<div class="flex-shrink-0">
				<a href="/" class="hover:opacity-80 transition-opacity" aria-label="Eko - Home">
					<svg
						width="80"
						height="55"
						viewBox="0 0 149.23592 68.278572"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg">
						<g transform="translate(-31.099639,-111.1857)">
							<path
								style="white-space:pre;fill:currentColor;fill-opacity:1;stroke-width:1.10749"
								class="text-foreground"
								d="m 53.186934,179.28191 c 13.037208,0 22.830417,-4.12414 33.088311,-11.50921 l -4.050191,-7.48104 c -8.259163,5.08329 -15.861479,8.2483 -24.987529,8.2483 -5.680492,0 -9.247067,-1.82227 -10.234108,-5.46687 14.603641,-0.76722 27.163117,-5.08321 31.268147,-17.07201 3.579579,-10.45416 -2.644832,-16.20882 -14.471459,-16.20882 -12.105974,0 -25.40409,7.28919 -30.921276,23.40211 -5.648499,16.49657 2.428491,26.08754 20.308105,26.08754 z m -5.326113,-25.51206 c 0.03905,-0.38355 0.202326,-0.86322 0.399571,-1.43871 2.901176,-7.38506 7.315273,-11.0296 11.878302,-11.0296 3.818031,0 5.209959,1.91815 4.159093,4.98728 -1.57636,4.60369 -7.415225,6.42599 -16.436887,7.48103 z m 50.52657,-42.58415 -22.988138,67.13712 h 15.08594 l 4.761838,-13.90699 c 1.3145,-0.57544 2.4756,-1.24681 3.60387,-1.8223 l 1.266849,5.27509 c 1.34962,7.481 5.21808,11.41329 12.5748,11.41329 5.77364,0 11.83929,-1.6835 17.88504,-7.9176 l -0.86518,-10.78487 c -3.44463,3.26095 -7.40768,5.57589 -10.48075,5.57589 -3.91115,0 -6.00597,-1.48734 -7.3293,-4.48999 -1.3233,-3.00264 -0.52201,-7.25235 -0.52201,-7.25235 8.08909,-5.94647 15.56576,-13.49516 21.5611,-23.66162 h -15.0859 c -4.46765,8.15237 -10.00416,13.71514 -17.25558,18.03112 l 12.87336,-37.59679 z m 30.600299,43.35138 c -5.91125,17.26387 3.41916,23.40219 16.39102,24.74483 15.5351,1.6079 27.33228,-7.48096 33.24353,-24.74483 1.24791,-3.64457 1.80575,-6.90547 1.70087,-9.591 -0.14647,-2.56153 -1.29907,-8.21968 -4.14425,-10.74179 -3.26562,-2.97324 -8.17416,-4.41191 -13.85465,-4.41191 -13.03721,0 -27.39251,7.3851 -33.3366,24.74486 z m 29.39573,-13.23554 c 5.68053,0 8.27268,4.12409 5.1857,13.13965 -3.08697,9.01556 -8.56905,13.33151 -14.24958,13.33151 -5.68048,0 -8.30009,-4.31595 -5.21312,-13.33151 3.08698,-9.01556 8.59651,-13.13965 14.277,-13.13965 z"
								aria-label="eko" />
						</g>
					</svg>
				</a>
			</div>

			<!-- Navigation Links -->
			<!-- <div class="hidden md:block">
				<div class="ml-10 flex items-baseline space-x-8">
					<a href="/" class="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
						Home
					</a>
					<a href="/about" class="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors">
						About
					</a>
					<a href="/services" class="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors">
						Services
					</a>
					<a href="/contact" class="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors">
						Contact
					</a>
				</div>
			</div> -->

			<!-- CTA Button -->
			<div class="hidden md:block">
				<!-- <a href="/get-started" class="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
					Get Started
				</a> -->
        <Button href="https://eko-app.com" target="_blank" rel="noopener noreferrer">Web App (Beta)<MoveUpRight /></Button>
			</div>

			<!-- Mobile menu button -->
			<div class="md:hidden">
				<button type="button" class="text-muted-foreground hover:text-foreground focus:outline-none focus:text-foreground transition-colors" aria-label="Open mobile menu">
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</div>
		</div>
	</div>
</nav>

<!-- Main Content -->
<main class="min-h-screen pt-16">
	<!-- Hero Section -->
	<section class="relative flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 sm:px-6 lg:px-8">
		<div class="text-center max-w-4xl mx-auto">
			<!-- Main Heading -->
			<h1 class="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
				Social Media
				<span class="block text-primary">for Everyone</span>
			</h1>

			<!-- Subheading -->
			<p class="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
				Connect with friends and family, share your thoughts, and meet new people.
			</p>

			<!-- App Store Buttons -->
			<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
				<a href="https://apps.apple.com/us/app/eko/id6470772031?platform=iphone" class="hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer" aria-label="Download on the App Store">
					<img src="/appStoreButton.svg" alt="Download on the App Store" class="h-16 w-auto" />
				</a>
				<a href="https://play.google.com/store/apps/details?id=com.echo.android" class="hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer" aria-label="Get it on Google Play">
					<img src="/playStoreButton.svg" alt="Get it on Google Play" class="h-16 w-auto" />
				</a>
			</div>

			<!-- Features Grid -->
			<!-- <div class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
				<div class="text-center p-6 rounded-lg border border-border hover:border-primary/20 transition-colors">
					<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
						<svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
						</svg>
					</div>
					<h3 class="text-xl font-semibold text-foreground mb-2">Lightning Fast</h3>
					<p class="text-muted-foreground">Optimized for speed and performance across all devices and platforms.</p>
				</div>

				<div class="text-center p-6 rounded-lg border border-border hover:border-primary/20 transition-colors">
					<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
						<svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</div>
					<h3 class="text-xl font-semibold text-foreground mb-2">Reliable</h3>
					<p class="text-muted-foreground">Built with modern technologies and best practices for maximum reliability.</p>
				</div>

				<div class="text-center p-6 rounded-lg border border-border hover:border-primary/20 transition-colors">
					<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
						<svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
						</svg>
					</div>
					<h3 class="text-xl font-semibold text-foreground mb-2">Developer Friendly</h3>
					<p class="text-muted-foreground">Clean code architecture that's easy to maintain and extend.</p>
				</div>
			</div>
		</div> -->

		<!-- Background Elements -->
		<div class="absolute inset-0 -z-10 overflow-hidden">
			<div class="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
			<div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
		</div>
	</section>
</main>

<style>
	/* Additional custom styles if needed */
	:global(html) {
		scroll-behavior: smooth;
	}
</style>