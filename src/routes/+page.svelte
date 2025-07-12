<script lang="ts">
  // No imports needed for navigation since it's in layout
</script>

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
			</div> -->
		</div>

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