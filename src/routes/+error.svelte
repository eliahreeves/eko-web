<script lang="ts">
  import { page } from '$app/stores';
  import { Button } from "$lib/components/ui/button/index.js";
  import { Home, ArrowLeft } from '@lucide/svelte';
</script>

<svelte:head>
  <title>Page Not Found - Eko</title>
  <meta name="description" content="The page you're looking for doesn't exist." />
</svelte:head>

<!-- Main Content -->
<main class="min-h-screen pt-16 flex items-center justify-center px-4 sm:px-6 lg:px-8">
  <div class="text-center max-w-3xl mx-auto">
    <!-- Large 404 Number -->
    <div class="mb-8">
      <h1 class="text-8xl sm:text-9xl lg:text-[12rem] font-bold text-primary/20 leading-none select-none">
        404
      </h1>
    </div>

    <!-- Error Message -->
    <div class="mb-8">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        Page Not Found
      </h2>
      <p class="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
      </p>
    </div>

    <!-- Action Buttons -->
    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
      <Button href="/" class="flex items-center gap-2">
        <Home class="w-4 h-4" />
        Go Home
      </Button>
      <!-- <Button variant="outline" on:click={() => history.back()} class="flex items-center gap-2">
        <ArrowLeft class="w-4 h-4" />
        Go Back
      </Button> -->
    </div>

    <!-- Helpful Links -->
    <div class="border-t border-border pt-8">
      <p class="text-sm text-muted-foreground mb-4">Looking for something specific?</p>
      <div class="flex flex-wrap justify-center gap-4 text-sm">
        <!-- <a href="/" class="text-primary hover:text-primary/80 transition-colors">
          Home
        </a>
        <span class="text-muted-foreground">•</span> -->
        
        
        <a href="https://apps.apple.com/us/app/eko/id6470772031?platform=iphone" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-primary/80 transition-colors">
          iOS App
        </a>
        <span class="text-muted-foreground">•</span>
        <a href="https://play.google.com/store/apps/details?id=com.echo.android" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-primary/80 transition-colors">
          Android App
        </a>
        <span class="text-muted-foreground">•</span>
        <a href="https://app.eko-app.com" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-primary/80 transition-colors">
          Web App
        </a>
      </div>
    </div>

    <!-- Background Elements -->
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div class="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
    </div>
  </div>
</main>

<style>
  /* Additional custom styles */
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
